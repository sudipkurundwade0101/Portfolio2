(function () {
  const iconPaths = {
    arrowRight:
      '<path d="M5 12h14"></path><path d="m13 5 7 7-7 7"></path>',
    arrowUp: '<path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path>',
    award:
      '<circle cx="12" cy="8" r="5"></circle><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5"></path>',
    book:
      '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path>',
    briefcase:
      '<path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"></path><rect x="3" y="6" width="18" height="14" rx="2"></rect><path d="M3 12h18"></path>',
    check:
      '<path d="M20 6 9 17l-5-5"></path>',
    cloud:
      '<path d="M17.5 19H7a5 5 0 1 1 1.2-9.85A7 7 0 0 1 21 12.5 3.5 3.5 0 0 1 17.5 19Z"></path>',
    code:
      '<path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path>',
    database:
      '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"></path><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"></path>',
    download:
      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path>',
    external:
      '<path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>',
    github:
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.1 10.1 0 0 0-6 0C8 2 7 2 7 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 6 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.5 2-5-2-7-2"></path>',
    layout:
      '<rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
    mail:
      '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',
    menu:
      '<path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path>',
    send:
      '<path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path>',
    server:
      '<rect x="3" y="4" width="18" height="8" rx="2"></rect><rect x="3" y="12" width="18" height="8" rx="2"></rect><path d="M7 8h.01"></path><path d="M7 16h.01"></path>',
    shapes:
      '<circle cx="7" cy="7" r="4"></circle><path d="m14 14 7 7"></path><path d="M14 21h7v-7"></path>',
    sparkles:
      '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"></path><path d="M5 3v4"></path><path d="M3 5h4"></path><path d="M19 17v4"></path><path d="M17 19h4"></path>',
    tools:
      '<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.8 2.8-3-3Z"></path>',
    trophy:
      '<path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10v5a5 5 0 0 1-10 0Z"></path><path d="M5 9a3 3 0 0 1-3-3V5h5"></path><path d="M19 9a3 3 0 0 0 3-3V5h-5"></path>',
    x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
  };

  const toneIcon = {
    violet: "sparkles",
    pink: "sparkles",
    yellow: "award",
    green: "check",
  };

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function icon(name, className = "") {
    const paths = iconPaths[name] || iconPaths.sparkles;
    return `<svg class="icon ${escapeHTML(className)}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }

  function sectionHeading({ kicker, title, body, align = "left" }) {
    return `
      <div class="section-heading section-heading--${escapeHTML(align)} reveal">
        <p class="eyebrow">${escapeHTML(kicker)}</p>
        <h2>${escapeHTML(title)}</h2>
        ${body ? `<p>${escapeHTML(body)}</p>` : ""}
      </div>
    `;
  }

  function tag(label, tone = "") {
    return `<span class="tag ${tone ? `tag--${escapeHTML(tone)}` : ""}">${escapeHTML(label)}</span>`;
  }

  function iconCircle(iconName, tone = "violet", label = "") {
    return `
      <span class="icon-circle icon-circle--${escapeHTML(tone)}" ${label ? `aria-label="${escapeHTML(label)}"` : "aria-hidden=\"true\""}>
        ${icon(iconName)}
      </span>
    `;
  }

  function buttonLink({ href, label, variant = "primary", iconName = "arrowRight", disabled = false }) {
    if (disabled || !href) {
      return `
        <button class="button button--${escapeHTML(variant)} is-disabled" type="button" disabled>
          <span>${escapeHTML(label)}</span>
          ${iconName ? `<span class="button__icon">${icon(iconName)}</span>` : ""}
        </button>
      `;
    }

    return `
      <a class="button button--${escapeHTML(variant)}" href="${escapeHTML(href)}">
        <span>${escapeHTML(label)}</span>
        ${iconName ? `<span class="button__icon">${icon(iconName)}</span>` : ""}
      </a>
    `;
  }

  function socialLink(item) {
    return `
      <a class="social-link" href="${escapeHTML(item.href)}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""} aria-label="${escapeHTML(item.label)}">
        ${icon(item.icon)}
        <span>${escapeHTML(item.label)}</span>
      </a>
    `;
  }

  function skillGroup(group) {
    return `
      <article class="skill-card sticker-card reveal" data-tone="${escapeHTML(group.tone)}">
        ${iconCircle(group.icon, group.tone, group.category)}
        <h3>${escapeHTML(group.category)}</h3>
        <div class="skill-card__items">
          ${group.items.map((item) => tag(item, group.tone)).join("")}
        </div>
      </article>
    `;
  }

  function projectCard(project) {
    const linkTargets = [
      { label: "GitHub", href: project.githubUrl, iconName: "github" },
      { label: "Live demo", href: project.liveUrl, iconName: "external" },
    ].filter((link) => Boolean(link.href));

    return `
      <article class="project-card sticker-card ${project.featured ? "project-card--featured" : ""} reveal" data-tone="${escapeHTML(project.accent)}">
        <div class="project-card__preview" aria-label="${escapeHTML(project.title)} preview">
          <div class="preview-grid">
            <span></span><span></span><span></span><span></span>
          </div>
          <div class="preview-orbit">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="preview-badge">${escapeHTML(project.preview.label)}</div>
          <strong>${escapeHTML(project.preview.metric)}</strong>
        </div>
        <div class="project-card__body">
          <p class="card-kicker">${escapeHTML(project.eyebrow)}</p>
          <h3>${escapeHTML(project.title)}</h3>
          <p>${escapeHTML(project.description)}</p>
          ${project.problem ? `<p class="project-card__problem">${escapeHTML(project.problem)}</p>` : ""}
          <ul class="check-list">
            ${project.features.map((feature) => `<li>${icon("check")}<span>${escapeHTML(feature)}</span></li>`).join("")}
          </ul>
          <div class="tag-list">
            ${project.stack.map((item) => tag(item, project.accent)).join("")}
          </div>
          <div class="card-actions">
            ${linkTargets
              .map((link) => `<a class="card-link" href="${escapeHTML(link.href)}" target="_blank" rel="noreferrer">${icon(link.iconName)}<span>${escapeHTML(link.label)}</span></a>`)
              .join("")}
          </div>
        </div>
      </article>
    `;
  }

  function timelineItem(item, index) {
    return `
      <article class="timeline-item reveal" style="--item-index: ${index}">
        <div class="timeline-marker" aria-hidden="true">${icon(index % 2 === 0 ? "briefcase" : "sparkles")}</div>
        <div class="timeline-card sticker-card">
          <p class="card-kicker">${escapeHTML(item.date)}</p>
          <h3>${escapeHTML(item.role)}</h3>
          <p class="timeline-card__company">${escapeHTML(item.company)}</p>
          <p>${escapeHTML(item.description)}</p>
          <ul class="check-list">
            ${item.achievements.map((achievement) => `<li>${icon("check")}<span>${escapeHTML(achievement)}</span></li>`).join("")}
          </ul>
          <div class="tag-list">
            ${item.technologies.map((technology) => tag(technology)).join("")}
          </div>
        </div>
      </article>
    `;
  }

  function achievementCard(item) {
    return `
      <article class="achievement-card sticker-card reveal" data-tone="${escapeHTML(item.tone)}">
        ${iconCircle(item.icon || toneIcon[item.tone], item.tone, item.title)}
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
      </article>
    `;
  }

  function decoration(kind, className = "") {
    return `<span class="decor decor--${escapeHTML(kind)} ${escapeHTML(className)}" aria-hidden="true"></span>`;
  }

  window.PortfolioUI = {
    achievementCard,
    buttonLink,
    decoration,
    escapeHTML,
    icon,
    iconCircle,
    projectCard,
    sectionHeading,
    skillGroup,
    socialLink,
    tag,
    timelineItem,
  };
})();
