(function () {
  const data = window.portfolioData;
  const ui = window.PortfolioUI;
  const app = document.querySelector("#app");

  document.documentElement.classList.add("js");

  if (!data || !ui || !app) {
    return;
  }

  const {
    achievementCard,
    buttonLink,
    decoration,
    escapeHTML,
    icon,
    projectCard,
    sectionHeading,
    skillGroup,
    socialLink,
    tag,
    timelineItem,
  } = ui;

  document.title = `${data.personal.name} | ${data.personal.role}`;
  const brandInitial = data.personal.name.replace(/[^a-z0-9]/gi, "").charAt(0) || "P";

  function navLinks() {
    return data.navigation
      .map(
        (item) =>
          `<a class="nav-link" href="${escapeHTML(item.href)}" data-nav-link="${escapeHTML(item.href.replace("#", ""))}">${escapeHTML(item.label)}</a>`
      )
      .join("");
  }

  function renderHeader() {
    return `
      <header class="site-header" data-site-header>
        <nav class="navbar" aria-label="Primary navigation">
          <a class="brand" href="#home" aria-label="${escapeHTML(data.personal.name)} home">
            <span class="brand__mark" aria-hidden="true">${escapeHTML(brandInitial)}</span>
            <span class="brand__text">${escapeHTML(data.personal.name)}</span>
          </a>
          <button class="nav-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-menu" data-nav-toggle>
            ${icon("menu")}
          </button>
          <div class="nav-menu" id="primary-menu" data-nav-menu>
            ${navLinks()}
          </div>
        </nav>
      </header>
    `;
  }

  function renderHero() {
    const resumeButton = data.personal.resumeUrl
      ? buttonLink({
          href: data.personal.resumeUrl,
          label: "Download Resume",
          variant: "secondary",
          iconName: "download",
        })
      : "";

    return `
      <section class="hero section" id="home" aria-labelledby="hero-title">
        ${decoration("circle", "hero__sun")}
        ${decoration("dots", "hero__dots")}
        ${decoration("squiggle", "hero__squiggle")}
        <div class="section__inner hero__grid">
          <div class="hero__content reveal">
            <p class="hero__label">
              <span aria-hidden="true"></span>
              ${escapeHTML(data.personal.label)}
            </p>
            <h1 id="hero-title">
              Hi, I am <span>${escapeHTML(data.personal.name)}</span>
              <strong>Software developer focused on <em>full-stack</em> work.</strong>
            </h1>
            <p class="hero__copy">${escapeHTML(data.personal.intro)}</p>
            <div class="hero__actions">
              ${buttonLink({ href: "#projects", label: "View My Work", variant: "primary", iconName: "arrowRight" })}
              ${resumeButton}
            </div>
            <div class="hero__chips" aria-label="Portfolio focus areas">
              ${data.focusAreas.map((item, index) => tag(item, ["violet", "pink", "green", "yellow"][index % 4])).join("")}
            </div>
          </div>
          <div class="hero__visual reveal" aria-label="Playful geometric developer illustration">
            <div class="portrait-card sticker-card">
              <div class="portrait-card__grid" aria-hidden="true"></div>
              <div class="portrait-card__avatar" role="img" aria-label="Abstract geometric developer portrait">
                <span class="avatar-shape avatar-shape--head"></span>
                <span class="avatar-shape avatar-shape--body"></span>
                <span class="avatar-shape avatar-shape--spark"></span>
                <span class="avatar-shape avatar-shape--code">&lt;/&gt;</span>
              </div>
              <div class="portrait-card__badge portrait-card__badge--top">${icon("sparkles")} Clean UI</div>
              <div class="portrait-card__badge portrait-card__badge--bottom">${icon("code")} Java + APIs</div>
            </div>
            ${decoration("triangle", "visual-triangle")}
            ${decoration("pill", "visual-pill")}
            ${decoration("star", "visual-star")}
          </div>
        </div>
      </section>
    `;
  }

  function renderAbout() {
    return `
      <section class="section section--about" id="about" aria-labelledby="about-title">
        ${decoration("grid", "about-grid-bg")}
        <div class="section__inner">
          ${sectionHeading({
            kicker: "About",
            title: "A developer who likes practical systems.",
            body:
              "I work on full-stack projects with a backend-first mindset and keep the interface simple enough to use without friction.",
          })}
          <div class="about-layout">
            <article class="about-card sticker-card reveal">
              ${decoration("blob", "about-card__blob")}
              <p class="card-kicker">Personal introduction</p>
              <h3>What I build</h3>
              <p>${escapeHTML(data.personal.philosophy)}</p>
              <p>${escapeHTML(data.personal.currentFocus)}</p>
              <div class="about-card__tags">
                ${["Readable code", "Accessible UI", "Real products", "Fast learning"].map((item, index) => tag(item, ["violet", "pink", "yellow", "green"][index])).join("")}
              </div>
            </article>
            <div class="fact-grid">
              ${data.aboutFacts
                .map(
                  (fact) => `
                    <article class="fact-card sticker-card reveal" data-tone="${escapeHTML(fact.tone)}">
                      ${ui.iconCircle(fact.icon, fact.tone, fact.label)}
                      <p>${escapeHTML(fact.label)}</p>
                      <h3>${escapeHTML(fact.value)}</h3>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderSkills() {
    return `
      <section class="section section--skills" id="skills" aria-labelledby="skills-title">
        ${decoration("dots", "skills-dots")}
        <div class="section__inner">
          ${sectionHeading({
            kicker: "Skills",
            title: "A focused stack for full-stack work.",
            body:
              "The skills are grouped around the technologies I use in projects and the areas I am actively improving.",
          })}
          <div class="skills-grid">
            ${data.skills.map(skillGroup).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderProjects() {
    const [featured, ...rest] = data.projects;

    return `
      <section class="section section--projects" id="projects" aria-labelledby="projects-title">
        ${decoration("squiggle", "projects-squiggle")}
        <div class="section__inner">
          ${sectionHeading({
            kicker: "Projects",
            title: "Projects from real code, not filler.",
            body:
              "Each card is based on project files I inspected, with links shown only where a real repository URL exists.",
          })}
          <div class="projects-layout">
            ${projectCard(featured)}
            <div class="project-grid">
              ${rest.map(projectCard).join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderExperience() {
    return `
      <section class="section section--experience" id="experience" aria-labelledby="experience-title">
        <div class="section__inner">
          ${sectionHeading({
            kicker: "Experience",
            title: "Learning by building complete workflows.",
            body:
              "This section stays honest: no invented jobs, just the development work currently available from the project history.",
          })}
          <div class="timeline">
            ${data.experience.map(timelineItem).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderEducation() {
    const education = data.education[0];

    return `
      <section class="section section--education" id="education" aria-labelledby="education-title">
        ${decoration("circle", "education-circle")}
        <div class="section__inner">
          ${sectionHeading({
            kicker: "Education",
            title: "The academic base behind the work.",
            body:
              "A simple education section with the known degree and institute details.",
          })}
          <article class="education-card sticker-card reveal">
            <div class="education-card__icon">${ui.iconCircle("book", "green", "Education")}</div>
            <div>
              <p class="card-kicker">${escapeHTML(education.duration)}</p>
              <h3>${escapeHTML(education.degree)}</h3>
              <p class="education-card__school">${escapeHTML(education.school)}</p>
            </div>
            <div class="education-card__group">
              <h4>Relevant coursework</h4>
              <div class="tag-list">
                ${education.coursework.map((item, index) => tag(item, ["violet", "pink", "yellow", "green"][index % 4])).join("")}
              </div>
            </div>
            ${
              education.achievements.length
                ? `<div class="education-card__group">
                    <h4>Achievements</h4>
                    <ul class="check-list">${education.achievements.map((item) => `<li>${icon("check")}<span>${escapeHTML(item)}</span></li>`).join("")}</ul>
                  </div>`
                : ""
            }
          </article>
        </div>
      </section>
    `;
  }

  function renderAchievements() {
    if (!data.achievements.length) {
      return "";
    }

    return `
      <section class="section section--achievements" id="achievements" aria-labelledby="achievements-title">
        <div class="section__inner">
          ${sectionHeading({
            kicker: "Achievements",
            title: "Signals beyond the project list.",
            body:
              "Hackathons, communities, coding platforms, certifications, and open-source work can live here.",
          })}
          <div class="achievement-grid">
            ${data.achievements.map(achievementCard).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderContact() {
    const socialLinks = data.socials.length
      ? `<div class="contact-links">${data.socials.map(socialLink).join("")}</div>`
      : "";

    return `
      <section class="section section--contact" id="contact" aria-labelledby="contact-title">
        ${decoration("dots", "contact-dots")}
        ${decoration("star", "contact-star")}
        <div class="section__inner contact-layout">
          <div class="contact-copy reveal">
            <p class="eyebrow">Contact</p>
            <h2 id="contact-title">Let's build something useful.</h2>
            <p>
              Have a project, collaboration, internship, or question? Send a short note with the context and I will keep the reply practical.
            </p>
            ${socialLinks}
          </div>
          <form class="contact-form sticker-card reveal" novalidate data-contact-form>
            <div class="form-row">
              <div class="field">
                <label for="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" autocomplete="name" required />
                <p class="field-error" id="contact-name-error"></p>
              </div>
              <div class="field">
                <label for="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" autocomplete="email" required />
                <p class="field-error" id="contact-email-error"></p>
              </div>
            </div>
            <div class="field">
              <label for="contact-subject">Subject</label>
              <input id="contact-subject" name="subject" type="text" required />
              <p class="field-error" id="contact-subject-error"></p>
            </div>
            <div class="field">
              <label for="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="6" required></textarea>
              <p class="field-error" id="contact-message-error"></p>
            </div>
            <button class="button button--primary" type="submit">
              <span>Send Message</span>
              <span class="button__icon">${icon("send")}</span>
            </button>
            <p class="form-status" role="status" aria-live="polite" data-form-status></p>
          </form>
        </div>
      </section>
    `;
  }

  function renderFooter() {
    return `
      <footer class="site-footer">
        <div class="section__inner footer-inner">
          <div>
            <a class="brand brand--footer" href="#home" aria-label="${escapeHTML(data.personal.name)} home">
              <span class="brand__mark" aria-hidden="true">${escapeHTML(brandInitial)}</span>
              <span class="brand__text">${escapeHTML(data.personal.name)}</span>
            </a>
            <p>${escapeHTML(data.personal.headline)}</p>
          </div>
          <div class="footer-actions">
            <div class="footer-socials">${data.socials.map(socialLink).join("")}</div>
            <a class="back-to-top" href="#home" aria-label="Back to top">
              ${icon("arrowUp")}
            </a>
          </div>
          <p class="copyright">Copyright ${new Date().getFullYear()} ${escapeHTML(data.personal.name)}. Built with a playful geometric system.</p>
        </div>
      </footer>
    `;
  }

  function renderApp() {
    app.innerHTML = `
      ${renderHeader()}
      <main id="main">
        ${renderHero()}
        ${renderAbout()}
        ${renderSkills()}
        ${renderProjects()}
        ${renderExperience()}
        ${renderEducation()}
        ${renderAchievements()}
        ${renderContact()}
      </main>
      ${renderFooter()}
    `;
  }

  function setupNavigation() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-nav-menu]");
    const links = Array.from(document.querySelectorAll("[data-nav-link]"));

    if (!toggle || !menu) {
      return;
    }

    function setOpen(isOpen) {
      menu.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      toggle.innerHTML = isOpen ? icon("x") : icon("menu");
      document.body.classList.toggle("nav-open", isOpen);
    }

    toggle.addEventListener("click", () => {
      setOpen(!menu.classList.contains("is-open"));
    });

    links.forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });

    const observedSections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    function setActive(id) {
      links.forEach((link) => {
        const isActive = link.dataset.navLink === id;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
      );

      observedSections.forEach((section) => observer.observe(section));
    }
  }

  function setupReveal() {
    const revealItems = Array.from(document.querySelectorAll(".reveal"));

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  function setupContactForm() {
    const form = document.querySelector("[data-contact-form]");
    const status = document.querySelector("[data-form-status]");

    if (!form || !status) {
      return;
    }

    function setFieldError(field, message) {
      const error = document.querySelector(`#${field.id}-error`);
      field.setAttribute("aria-invalid", message ? "true" : "false");
      field.setAttribute("aria-describedby", error ? error.id : "");
      if (error) {
        error.textContent = message;
      }
    }

    function validateField(field) {
      const value = field.value.trim();
      let message = "";

      if (!value) {
        message = `${field.previousElementSibling.textContent} is required.`;
      } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = "Enter a valid email address.";
      }

      setFieldError(field, message);
      return !message;
    }

    const fields = Array.from(form.querySelectorAll("input, textarea"));

    fields.forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const isValid = fields.map(validateField).every(Boolean);

      if (!isValid) {
        status.textContent = "Please fix the highlighted fields.";
        status.className = "form-status form-status--error";
        return;
      }

      const formData = new FormData(form);
      const configuredEmail = data.personal.email && !data.personal.email.includes("[") ? data.personal.email : "";

      if (!configuredEmail) {
        status.textContent = "Message looks ready. Add an email address in src/data/portfolioData.js before publishing to enable sending.";
        status.className = "form-status form-status--success";
        return;
      }

      const subject = encodeURIComponent(formData.get("subject"));
      const body = encodeURIComponent(
        `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
      );

      window.location.href = `mailto:${configuredEmail}?subject=${subject}&body=${body}`;
      status.textContent = "Opening your email app.";
      status.className = "form-status form-status--success";
      form.reset();
    });
  }

  renderApp();
  setupNavigation();
  setupReveal();
  setupContactForm();
})();
