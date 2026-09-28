# Sudip Kurundwade - Portfolio

A dependency-free developer portfolio for Sudip Kurundwade, built with HTML, CSS, and JavaScript. The visual direction follows the Playful Geometric design system: stable content grids, tactile hard shadows, bold typography, and colorful geometric decoration.

## Features

- Playful Geometric UI
- Responsive design
- Accessible navigation
- Project showcase
- Skills
- Experience/Education
- Contact section

## Tech Used

- HTML
- CSS
- JavaScript

## Run Locally

Open `index.html` directly in a browser, or run a tiny local server from the project folder:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

You can also run the validation scripts with Node:

```bash
npm run check
npm run browser:check
```

## Deployment

This site is intended for GitHub Pages. Keep the project static and deploy the repository root.

Recommended setup:

- Repository name: `portfolio`
- Branch: `main`
- GitHub Pages source: `Deploy from a branch`
- Folder: `/root`

The HTML, CSS, JavaScript, favicon, and preview image use relative paths so the site works from `https://sudipkurundwade.github.io/portfolio/`.

Before publishing, add a real resume PDF at `assets/resume.pdf`, update the email/social links in `src/data/portfolioData.js`, and update the canonical/Open Graph URL in `index.html` if your GitHub Pages URL is different from `https://sudipkurundwade.github.io/portfolio/`.
