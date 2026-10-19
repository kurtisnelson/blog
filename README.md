# Kurt Nelson's Blog

Personal blog, migrated from flat Markdown files to [Eleventy](https://www.11ty.dev/).

## Develop

```sh
npm install
npm run serve   # http://localhost:8080
```

## Build

```sh
npm run build   # writes static site to _site/
```

## GitHub Pages

The site builds for GitHub Pages as a project site: URLs are prefixed with
`/blog/` by default (`https://kurtisnelson.github.io/blog/`). The build also
emits `_site/.nojekyll` so Pages skips Jekyll processing.

- Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which builds
  and deploys `_site/` with the official Pages actions. In CI the prefix comes
  from `actions/configure-pages` (so it stays correct for a custom domain or
  user site without edits here).
- To override the prefix locally, set `PATH_PREFIX`, e.g.
  `PATH_PREFIX=/ npm run build` (custom domain at the domain root) or
  `PATH_PREFIX=/blog/ npm run serve`.
- No workflow runs on pull-request branches; only merges to `main` deploy.

## Content

Posts live in `_posts/` with front matter (`title`, `date`, `slug`, `tags`).
Each post is published at `/<slug>/`. Directory-wide defaults (layout, permalink)
are in `_posts/_posts.json`.
