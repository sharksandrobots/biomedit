# BiomEdit — Starbriq workspace

Local workflow: Astro → GitHub → Netlify (auto-deploy) → Obsidian for writing.

## 1. Get this into your empty `biomedit` GitHub repo

```bash
git clone https://github.com/<your-username>/biomedit.git
cd biomedit
# copy everything from this zip into that folder, then:
npm install
git add .
git commit -m "Scaffold Astro site"
git push origin main
```

## 2. Run it locally

```bash
npm run dev
```

Visit `http://localhost:4321`. You'll see the identity rough listed under "Roughs & deliverables" and the sample note under "Recent notes."

## 3. Connect Netlify

1. netlify.com → **Add new site → Import an existing project**
2. Pick the `biomedit` repo
3. Build command: `npm run build` — Publish directory: `dist` (already set in `netlify.toml`, Netlify should detect it automatically)
4. Deploy — you'll get a `random-name-123.netlify.app` URL, which is fine for now
5. From then on, every `git push` auto-deploys

## 4. Obsidian workflow

Point an Obsidian vault at `src/content/notes` (open that folder directly as a vault, or add it as a folder inside a larger vault). Every note needs this frontmatter to build correctly:

```markdown
---
title: "Your note title"
date: 2026-07-08
summary: "One line, optional"
---

Your content here.
```

Save the file into `src/content/notes/`, commit, push — it shows up on the site automatically.

## 5. Adding a new rough / deliverable

Drop the finished HTML file into `public/roughs/`, then add one entry to the `roughs` array at the top of `src/pages/index.astro`:

```js
{
  title: 'New thing',
  description: 'One line',
  href: '/roughs/your-file.html',
}
```

## 6. Editor

Cursor works as-is. For VS Code: install the **Claude Code** extension from the VS Code marketplace, open this folder, and it behaves the same way Cursor did.
