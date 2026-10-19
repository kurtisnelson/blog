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

## Content

Posts live in `_posts/` with front matter (`title`, `date`, `slug`, `tags`).
Each post is published at `/<slug>/`. Directory-wide defaults (layout, permalink)
are in `_posts/_posts.json`.
