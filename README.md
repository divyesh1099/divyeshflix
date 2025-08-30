# DivyeshFlix — A Netflix-style Resume (Vite + React + Tailwind)

A cinematic, Netflix-themed personal profile/resumé site. Built with **Vite + React + TailwindCSS** (and optional Three.js + GSAP scenes for that studio-intro vibe). Fully responsive, fast, and easy to deploy on **Vercel**.

> **Live Demo:** *[https://netflixprofile.divyeshvishwakarma.com/](https://netflixprofile.divyeshvishwakarma.com/)*

---

## ✨ Features

* 🎬 **Netflix-style UI** for your resume/portfolio
* ⚡ **Vite** dev server & ultra-fast builds
* 🎨 **TailwindCSS** utility styling
* 🧩 Modular components and scenes
* 🌗 SPA routing (deep links work on Vercel)
* 📱 Fully responsive

*Optional*

* 🌀 **GSAP/Three.js** intro strands/FX (keep or disable per scene)

---

## 🗂 Project Structure

```
divyeshflix/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ eslint.config.js
├─ public/
└─ src/
   ├─ App.css
   ├─ App.jsx
   ├─ index.css
   ├─ main.jsx
   ├─ assets/         # images, fonts, static assets
   ├─ components/     # reusable UI blocks
   ├─ data/           # your profile/resume data (JSON/JS modules)
   ├─ hooks/          # custom hooks (if any)
   └─ scenes/         # special/animated sections (e.g., intro)
```

---

## 🧰 Tech Stack

* **React 19**, **Vite**
* **TailwindCSS**, **PostCSS**, **Autoprefixer**
* **ESLint** (React hooks/refresh plugins)
* *Optional*: **Three.js**, **GSAP**

---

## 🚀 Getting Started (Local)

**Requirements**

* Node.js **≥ 20.x**
* npm (or pnpm/yarn)

**Install & Run**

```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

**Available scripts** (from `package.json`)

* `dev` – Vite dev server
* `build` – production build to `dist/`
* `build:css` – standalone Tailwind build (if needed)
* `preview` – local preview of `dist`
* `lint` – run ESLint

---

## ✍️ Customize Your Resume

* Update content in **`src/data/`** (name, title, summary, skills, links, projects).
* Swap images/logos in **`src/assets/`**.
* Tune styles/utilities in **`src/index.css`**, **`src/App.css`**, and **`tailwind.config.js`**.
* Edit or disable any animated **`src/scenes/*`** modules if you don’t want FX on certain pages.

---

## 🌐 Deploy on Vercel (with Custom Subdomain)

1. **Add SPA rewrites** (so deep links refresh correctly):

Create **`vercel.json`** in the repo root:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Commit & push:

```bash
git add vercel.json
git commit -m "chore: add Vercel SPA rewrites"
git push
```

2. **Import to Vercel**

* Vercel → **Add New Project** → Import from GitHub
* Framework: **Vite**
* Build command: `npm run build`
* Output directory: `dist`
* Node.js: **20.x** (Project Settings → General)

3. **Attach the domain**

* Vercel → Project → **Settings → Domains → Add**
  Add `netflixprofile.divyeshvishwakarma.com`.
* Vercel will show a **CNAME target** (e.g. `xxxxxx.vercel-dns.com`).

4. **Create DNS in GoDaddy**

* Go to your domain’s DNS: **Add Record**

  * **Type:** CNAME
  * **Host/Name:** `netflixprofile`
  * **Value/Points to:** *the exact Vercel CNAME target*
  * **TTL:** default
* Wait for propagation; Vercel will auto-issue HTTPS.

**Troubleshooting**

* **404 on refresh** → ensure `vercel.json` exists in the root and is in the deployed commit.
* **Blank page** → confirm output folder is `dist` and no custom `base` is set in `vite.config.js`.

---

## 🧪 Quality & Linting

```bash
npm run lint
```

Configure rules in `eslint.config.js`.

---

## 📸 Screenshots

*Add screenshots/GIFs here.*

| Home  | Projects | Details |
| ----- | -------- | ------- |
| *img* | *img*    | *img*   |

---

## 🗺 Roadmap (ideas)

* Dark/Light toggle
* CMS-backed content (Sanity/Contentlayer)
* Blog/Articles section in the same theme
* i18n
* Print-friendly “Resume PDF” route

---

## 📄 License

MIT © 2025 Divyesh Vishwakarma

---

## 🙌 Credits

* Netflix UI inspiration purely for educational/portfolio purposes.
* Libraries: React, Vite, Tailwind, (optional) GSAP, Three.js.

---

### Notes for Contributors (optional)

PRs welcome! Please:

* Keep components small & composable.
* Add types or prop-docs where helpful.
* Match Tailwind utility style used elsewhere.