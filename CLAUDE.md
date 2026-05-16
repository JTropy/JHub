# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal blog "京华" (knotens.org) built on **VitePress** with a fully custom theme — a personalized instance of `vitepress-theme-curve` (by imsyy). Site content is in Chinese. `README.md` is the upstream theme's documentation, not project-specific docs.

## Commands

Uses **pnpm** (v9.15.4, Node >=20). `.npmrc` sets `shamefully-hoist=true`.

- `pnpm dev` — dev server at http://127.0.0.1:9877
- `pnpm build` — `vitepress build`, outputs to `.vitepress/dist`
- `pnpm preview` — serve the built site
- `pnpm lint` — ESLint (airbnb-base + vue3) with `--fix`
- `pnpm format` — Prettier write across the repo
- `pnpm up` — shortcut for `git add . && git commit -m "update blog" && git push`

No test suite is configured.

## Deployment

Pushing to `master` triggers `.github/workflows/` → builds and publishes `.vitepress/dist` to the `pages` branch (GitHub Pages). `vercel.json` also configures a Vercel deployment (SPA-style rewrites, output `.vitepress/dist`).

## Theme configuration — two-file pattern

Site customization lives in the **root `themeConfig.mjs`** (site title, nav, footer, comment system, search, etc.). `.vitepress/init.mjs` `Object.assign`-merges it *over* the default config at `.vitepress/theme/assets/themeConfig.mjs`.

- Edit the **root `themeConfig.mjs`** for all site settings.
- Never rename or delete `.vitepress/theme/assets/themeConfig.mjs` — it is the fallback the merge starts from (`.gitignore` explicitly un-ignores it).
- The merge is shallow: overriding a nested object in the root file replaces that whole object.

## Architecture

**Build-time data layer.** `.vitepress/config.mjs` calls `getAllPosts()` (`theme/utils/getPostData.mjs`), which globs `posts/**.md`, parses frontmatter with `gray-matter`, and derives tags/categories/archives. This data is injected into `themeConfig.postData / tagsData / categoriesData / archivesData` and consumed across the theme. RSS is generated in the `buildEnd` hook.

**Custom theme** — `.vitepress/theme/` is a complete custom theme:
- `index.mjs` — registers Pinia (with `pinia-plugin-persistedstate`), vue-instantsearch, and route guards.
- `App.vue` — root layout. Page type is chosen by route, not router config: `/posts/` in the path → `Post` view; `frontmatter.layout === 'home'` → `Home`; otherwise → `Page`.
- `components/` and `views/` are **auto-imported** (unplugin-vue-components); Vue + VitePress APIs are auto-imported too — no explicit `import` needed in `.vue` files.
- `store/index.js` — single Pinia store (`mainStore`) for UI state (theme, player, scroll, menus).
- Path alias `@` → `.vitepress/theme`.

## Content model

- **`posts/`** — blog articles. **File path = URL path.** Frontmatter fields read by the data layer: `title, date, categories, tags, description, top, cover` (plus `copyright, references` used by the post view). `top: true` pins an article; posts sort by `top` then `date` descending.
- **`pages/`** — site pages; each `.md` mounts a view component (e.g. `pages/about.md` → `views/About.vue`).
- **Dynamic routes** use VitePress `[param].paths.mjs` files, all driven by post data: `page/[num].md` (home pagination, `postSize` posts per page), `pages/categories/[name].md`, `pages/tags/[name].md`.
- **`public/`** — static assets served at root (`images/`, `fonts/`, `favicon.ico`, `robots.txt`).

## Markdown extensions

`theme/utils/markdownConfig.mjs` adds, beyond VitePress defaults:
- Custom containers: `:::timeline`, `:::radio`, `:::button`, `:::card`
- Obsidian-style admonitions via fenced code blocks: ` ```ad-note `, `ad-warning`, `ad-tip`, `ad-danger`, etc.
- `markdown-it-attrs`, tabs plugin, math (MathJax3), line numbers, TOC levels 1–3
- Images are wrapped for the Fancybox lightbox (toggle via `fancybox.enable`)

## Conventions / gotchas

- ESLint and Prettier both enforce **double quotes**; Prettier: 2-space indent, semicolons, `printWidth` 100, `trailingComma: all`.
- `ignoreDeadLinks: true` — broken links will not fail the build.
- Production builds strip `console.log` (terser `pure_funcs`).
- `srcExclude` keeps `README.md` and `TODO.md` from being built as pages.
- External links are rewritten through a redirect interstitial (`jumpRedirect`, `public/redirect.html`); `cleanUrls` is on.
