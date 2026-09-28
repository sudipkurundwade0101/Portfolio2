import { readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "design.md",
  "src/styles/tokens.css",
  "src/styles/main.css",
  "src/data/portfolioData.js",
  "src/components/ui.js",
  "src/main.js",
];

const requiredTokens = [
  "--color-background: #fffdf5",
  "--color-foreground: #1e293b",
  "--color-accent: #8b5cf6",
  "--color-secondary: #f472b6",
  "--color-tertiary: #fbbf24",
  "--color-quaternary: #34d399",
  "--shadow-pop",
  "--ease-pop",
];

const requiredSectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
];

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

const files = new Map();

for (const file of requiredFiles) {
  try {
    files.set(file, await readFile(file, "utf8"));
  } catch {
    fail(`Missing required file: ${file}`);
  }
}

const tokens = files.get("src/styles/tokens.css") || "";
for (const token of requiredTokens) {
  if (!tokens.toLowerCase().includes(token)) {
    fail(`Missing design token: ${token}`);
  }
}

const main = files.get("src/main.js") || "";
for (const id of requiredSectionIds) {
  if (!main.includes(`id="${id}"`)) {
    fail(`Missing rendered section id: ${id}`);
  }
}

const index = files.get("index.html") || "";
for (const asset of [
  "src/styles/tokens.css",
  "src/styles/main.css",
  "src/data/portfolioData.js",
  "src/components/ui.js",
  "src/main.js",
]) {
  if (!index.includes(asset)) {
    fail(`index.html does not reference ${asset}`);
  }
}

if (!process.exitCode) {
  console.log("Static portfolio validation passed.");
}
