# beetleFolio — Tonny Blaire's Portfolio

Personal portfolio site built with Astro, Tailwind CSS v4, and TypeScript. Deploys automatically to Vercel on every push to `master`.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Adding a project

Open `src/data/projects.ts` and append an object to the `projects` array:

```ts
{
  title: "Your Project Name",
  year: 2025,
  description: "One or two sentences — what it does and who it's for.",
  tags: ["Python", "FastAPI", "React"],         // shown as pills on the card
  repo: "https://github.com/blazeblaire/repo",
  // demo: "https://live-url.com",              // omit for backend-only projects
  highlights: [
    "Specific metric or outcome — be concrete",
    "Another measurable result",
  ],
},
```

**Notes:**
- `demo` is optional. Omitting it shows a `server-side` badge instead of a broken link.
- `highlights` renders as a bulleted list — lead with numbers, not descriptions.
- Projects display in array order. Keep newest first.

---

## Editing existing content

| What to change | File | Where |
|---|---|---|
| Bio paragraph | `src/components/About.astro` | `<p>` block around line 56 |
| Skills list | `src/components/About.astro` | `skillGroups` array in the frontmatter |
| Hero tagline | `src/components/Hero.astro` | `<p>` starting "Building production backend…" |
| Availability text | `src/components/Hero.astro` | `<span>` reading "Available for remote…" |
| Experience / education | `src/data/experience.ts` | Add or edit objects in the `timeline` array |
| Contact links | `src/components/ContactSection.astro` | `contactLinks` array in the frontmatter |
| Page title + meta description | `src/layouts/BaseLayout.astro` | `title` and `description` default props (lines 14–16) |
| Canonical URL / OG base | `astro.config.mjs` | `site:` value |

### Adding an experience or education item

Edit `src/data/experience.ts`:

```ts
// Work experience
{
  type: "experience",
  title: "Job Title",
  org: "Company Name",
  location: "City, Country · remote",
  period: "Jan 2025 – Present",
  bullets: [
    "What you shipped or improved — include a metric.",
    "Another responsibility.",
  ],
},

// Education
{
  type: "education",
  title: "Degree or Certificate",
  org: "Institution",
  location: "City, Country",
  period: "Sep 2023 – Jun 2025",
  bullets: ["Subjects · Tools · Frameworks studied"],
},
```

Items with `type: "experience"` appear in the Experience column; `type: "education"` in the Education column. Order within each column follows array order — newest first.

---

## Swapping the CV PDF

1. Export your updated CV as a PDF.
2. Rename it `cv.pdf`.
3. Drop it into `public/`, replacing the existing file.

The "Download CV" button links to `/cv.pdf` and never needs to change.

---

## Activating the contact form

The form points to a placeholder endpoint until you replace it:

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy the 8-character ID (e.g. `xyzabcde`).
3. Open `src/components/ContactSection.astro`, line 10:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzabcde";
   ```
4. Commit and push — the form goes live on the next deploy.

---

## Redeploying

With Vercel's GitHub integration, **every push to `master` triggers a deploy automatically.**

```bash
git add src/data/projects.ts   # or whichever files changed
git commit -m "feat: add new project"
git push
```

Vercel runs `npm run build`, promotes `dist/` to the CDN, and the site is live — usually within 60 seconds.

**Force a redeploy without code changes:**
```bash
git commit --allow-empty -m "chore: trigger redeploy"
git push
```

**After connecting a custom domain**, update the site URL in `astro.config.mjs` so canonical links and OG tags are correct:
```js
site: 'https://your-domain.com',
```
Then commit and push.

---

## Project structure

```
src/
  components/       one file per section of the page
  data/
    projects.ts     add / remove projects here
    experience.ts   experience and education timeline
  layouts/
    BaseLayout.astro  HTML shell, SEO meta, dark-mode init
  pages/
    index.astro     assembles all sections (rarely needs touching)
  styles/
    global.css      Tailwind entry, fonts, design tokens
public/
  cv.pdf            drop your PDF here
  og.png            1200×630 px — required for social link previews
  favicon.svg
  favicon.ico
```
