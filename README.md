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

The site publishes to GitHub Pages at its custom domain,
**thisisnotajoke.com** (domain root, no path prefix). The build emits
`_site/.nojekyll` (so Pages skips Jekyll) and `_site/CNAME` (the custom
domain) into the published output.

- Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which builds
  and deploys `_site/` with the official Pages actions. In CI the path prefix
  comes from `actions/configure-pages` (empty for a custom domain, so links
  stay root-relative without edits here).
- If the site ever moves to a project site (e.g. `username.github.io/repo/`),
  build with `PATH_PREFIX=/repo/`.
- DNS side (outside this repo): point thisisnotajoke.com at GitHub Pages —
  A/AAAA records for `185.199.108–111.153`, or a CNAME record for `www` — and
  set the custom domain in Settings → Pages. TLS is provisioned by GitHub once
  DNS validates.
- No workflow runs on pull-request branches; only merges to `main` deploy.

## Content

Posts live in `_posts/` with front matter (`title`, `date`, `slug`, `tags`).
Each post is published at `/<slug>/`. Directory-wide defaults (layout, permalink)
are in `_posts/_posts.json`.
