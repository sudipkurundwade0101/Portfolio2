import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { existsSync } from "node:fs";
import { mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { extname, isAbsolute, join, relative, resolve } from "node:path";

const chromeCandidates = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
];

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml; charset=utf-8"],
]);

const chromePath = chromeCandidates.find((candidate) => existsSync(candidate));
const port = 9400 + Math.floor(Math.random() * 400);
const staticPort = 9800 + Math.floor(Math.random() * 400);
const rootDir = resolve(".");
const profileDir = resolve(".browser-smoke-profile");
const outputDir = resolve(".browser-smoke-output");
const pageUrl = process.env.PORTFOLIO_TEST_URL || `http://127.0.0.1:${staticPort}/portfolio/`;

if (!chromePath) {
  console.log("Chrome or Edge was not found, skipping browser smoke test.");
  process.exit(0);
}

function delay(ms) {
  return new Promise((resolveDelay) => setTimeout(resolveDelay, ms));
}

function closeServer(server) {
  return new Promise((resolveClose) => server.close(resolveClose));
}

function startStaticServer() {
  const server = createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url || "/", `http://127.0.0.1:${staticPort}`);
      let pathname = decodeURIComponent(requestUrl.pathname);

      if (pathname.startsWith("/portfolio/")) {
        pathname = pathname.slice("/portfolio/".length);
      }

      if (!pathname || pathname.endsWith("/")) {
        pathname = `${pathname}index.html`;
      }

      const filePath = resolve(rootDir, pathname.replace(/^\/+/, ""));
      const rel = relative(rootDir, filePath);

      if (rel.startsWith("..") || isAbsolute(rel)) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
      }

      const fileStat = await stat(filePath);
      const finalPath = fileStat.isDirectory() ? join(filePath, "index.html") : filePath;
      const body = await readFile(finalPath);
      response.writeHead(200, {
        "Content-Type": mimeTypes.get(extname(finalPath)) || "application/octet-stream",
      });
      response.end(body);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });

  return new Promise((resolveServer) => {
    server.listen(staticPort, "127.0.0.1", () => resolveServer(server));
  });
}

async function fetchJson(path, init) {
  const response = await fetch(`http://127.0.0.1:${port}${path}`, init);
  if (!response.ok) {
    throw new Error(`DevTools request failed: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function waitForDevTools() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      await fetchJson("/json/version");
      return;
    } catch {
      await delay(100);
    }
  }
  throw new Error("Timed out waiting for Chrome DevTools.");
}

async function removeDirectoryWhenAvailable(path) {
  for (let attempt = 0; attempt < 8; attempt += 1) {
    try {
      await rm(path, { recursive: true, force: true });
      return;
    } catch (error) {
      if (attempt === 7) {
        console.warn(`Could not remove temporary directory ${path}: ${error.message}`);
        return;
      }
      await delay(250);
    }
  }
}

function connect(url) {
  const socket = new WebSocket(url);
  const pending = new Map();
  const eventWaiters = new Map();
  const pageErrors = [];
  let id = 0;

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);

    if (message.id && pending.has(message.id)) {
      const { resolve: resolveCommand, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) {
        reject(new Error(message.error.message));
      } else {
        resolveCommand(message.result);
      }
      return;
    }

    if (message.method === "Runtime.exceptionThrown") {
      pageErrors.push(message.params.exceptionDetails?.text || "Runtime exception");
    }

    const waiters = eventWaiters.get(message.method);
    if (waiters?.length) {
      waiters.splice(0).forEach((resolveEvent) => resolveEvent(message.params));
    }
  });

  function command(method, params = {}) {
    id += 1;
    socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolveCommand, reject) => {
      pending.set(id, { resolve: resolveCommand, reject });
    });
  }

  function waitEvent(method) {
    return new Promise((resolveEvent) => {
      const waiters = eventWaiters.get(method) || [];
      waiters.push(resolveEvent);
      eventWaiters.set(method, waiters);
    });
  }

  return new Promise((resolveConnection, rejectConnection) => {
    socket.addEventListener("open", () => {
      resolveConnection({ command, pageErrors, socket, waitEvent });
    });
    socket.addEventListener("error", rejectConnection);
  });
}

function fail(message) {
  throw new Error(message);
}

let browser;
let staticServer;

try {
  await rm(profileDir, { recursive: true, force: true });
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(profileDir, { recursive: true });
  await mkdir(outputDir, { recursive: true });

  staticServer = await startStaticServer();

  browser = spawn(
    chromePath,
    [
      "--headless=old",
      "--disable-gpu",
      "--disable-software-rasterizer",
      "--disable-dev-shm-usage",
      "--no-sandbox",
      "--no-first-run",
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${profileDir}`,
      "about:blank",
    ],
    { stdio: ["ignore", "ignore", "pipe"] }
  );

  await waitForDevTools();
  const target = await fetchJson(`/json/new?${encodeURIComponent("about:blank")}`, { method: "PUT" });
  const client = await connect(target.webSocketDebuggerUrl);

  await client.command("Page.enable");
  await client.command("Runtime.enable");

  const viewports = [
    { name: "desktop", width: 1440, height: 1200, mobile: false, expectsMobileNav: false },
    { name: "laptop", width: 1024, height: 1200, mobile: false, expectsMobileNav: false },
    { name: "tablet", width: 768, height: 1200, mobile: false, expectsMobileNav: true },
    { name: "mobile", width: 390, height: 1200, mobile: true, expectsMobileNav: true },
  ];

  for (const viewport of viewports) {
    await client.command("Emulation.setDeviceMetricsOverride", {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.mobile,
    });

    const loaded = client.waitEvent("Page.loadEventFired");
    await client.command("Page.navigate", { url: pageUrl });
    await loaded;

    await client.command("Runtime.evaluate", {
      expression: "document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()",
      awaitPromise: true,
    });

    await client.command("Runtime.evaluate", {
      expression: "new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))",
      awaitPromise: true,
    });

    const result = await client.command("Runtime.evaluate", {
      returnByValue: true,
      expression: `(() => {
        const navToggle = document.querySelector("[data-nav-toggle]");
        const contactForm = document.querySelector("[data-contact-form]");
        const elements = Array.from(document.body.querySelectorAll("*"));
        const offenders = elements
          .map((element) => {
            const rect = element.getBoundingClientRect();
            return {
              tag: element.tagName.toLowerCase(),
              id: element.id || "",
              className: String(element.className || ""),
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width)
            };
          })
          .filter((item) => item.right > window.innerWidth + 1 || item.left < -1)
          .slice(0, 8);

        return {
          innerWidth: window.innerWidth,
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
          navToggleDisplay: navToggle ? getComputedStyle(navToggle).display : "missing",
          contactForm: Boolean(contactForm),
          heroTitle: document.querySelector("h1")?.textContent.trim() || "",
          offenders
        };
      })()`,
    });

    const metrics = result.result.value;
    const overflow = Math.max(metrics.scrollWidth, metrics.bodyScrollWidth) - metrics.clientWidth;

    if (overflow > 1) {
      fail(`${viewport.name}: horizontal overflow ${overflow}px. Offenders: ${JSON.stringify(metrics.offenders)}`);
    }

    if (viewport.expectsMobileNav && metrics.navToggleDisplay === "none") {
      fail(`${viewport.name}: navigation toggle is hidden.`);
    }

    if (viewport.expectsMobileNav) {
      const menuResult = await client.command("Runtime.evaluate", {
        returnByValue: true,
        expression: `(() => {
          const toggle = document.querySelector("[data-nav-toggle]");
          const menu = document.querySelector("[data-nav-menu]");
          toggle.click();
          const state = {
            expanded: toggle.getAttribute("aria-expanded"),
            open: menu.classList.contains("is-open"),
            pointerEvents: getComputedStyle(menu).pointerEvents
          };
          toggle.click();
          return state;
        })()`,
      });

      const menuState = menuResult.result.value;
      if (menuState.expanded !== "true" || !menuState.open || menuState.pointerEvents === "none") {
        fail(`${viewport.name}: menu did not open correctly. State: ${JSON.stringify(menuState)}`);
      }
    }

    if (!viewport.expectsMobileNav && metrics.navToggleDisplay !== "none") {
      fail(`${viewport.name}: navigation toggle should be hidden.`);
    }

    if (!metrics.contactForm) {
      fail(`${viewport.name}: contact form was not rendered.`);
    }

    if (!metrics.heroTitle.includes("Software developer")) {
      fail(`${viewport.name}: hero content did not render.`);
    }

    const screenshot = await client.command("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false,
    });

    await writeFile(resolve(outputDir, `${viewport.name}.png`), Buffer.from(screenshot.data, "base64"));
    console.log(`${viewport.name} browser smoke passed at ${metrics.innerWidth}px.`);
  }

  if (client.pageErrors.length) {
    fail(`Runtime errors: ${client.pageErrors.join("; ")}`);
  }

  client.socket.close();
} finally {
  if (browser && browser.exitCode === null) {
    browser.kill("SIGTERM");
    const exited = await Promise.race([
      new Promise((resolveExit) => browser.once("exit", resolveExit)),
      delay(2000).then(() => false),
    ]);

    if (exited === false && browser.exitCode === null) {
      browser.kill("SIGKILL");
      await Promise.race([
        new Promise((resolveExit) => browser.once("exit", resolveExit)),
        delay(2000),
      ]);
    }
  }

  if (staticServer) {
    await closeServer(staticServer);
  }

  await removeDirectoryWhenAvailable(profileDir);
}
