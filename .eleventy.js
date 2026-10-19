const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// GitHub Pages serves a project site from /<repo>/ unless a custom domain is
// set. PATH_PREFIX overrides the default (e.g. "/" for a custom domain or
// user site); actions/configure-pages passes it automatically in CI.
function normalizePathPrefix(prefix) {
  if (!prefix || prefix === "/") {
    return "/";
  }
  let p = prefix.startsWith("/") ? prefix : `/${prefix}`;
  if (!p.endsWith("/")) {
    p += "/";
  }
  return p;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Passthrough copies (static assets)
  eleventyConfig.addPassthroughCopy("assets");

  // GitHub Pages: skip Jekyll processing of the published output
  eleventyConfig.addPassthroughCopy(".nojekyll");

  // Markdown library with anchors for headings
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "anchor-link",
    level: [1, 2, 3, 4],
  });
  eleventyConfig.setLibrary("md", md);

  // Date filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate();
  });

  eleventyConfig.addFilter("fullDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("MMMM dd, yyyy");
  });

  // Collections
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("_posts/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addCollection("tags", (collection) => {
    const tagMap = {};
    for (const item of collection.getAllSorted()) {
      const tags = item.data.tags || [];
      for (const tag of tags) {
        if (!tagMap[tag]) {
          tagMap[tag] = [];
        }
        tagMap[tag].push(item);
      }
    }
    return tagMap;
  });

  // Pagination size is set per-template via pagination.data.pagination.size

  return {
    pathPrefix: normalizePathPrefix(
      process.env.PATH_PREFIX !== undefined
        ? process.env.PATH_PREFIX
        : "/blog/",
    ),
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
