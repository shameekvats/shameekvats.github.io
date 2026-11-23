module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Leaflet builds the map markup in the browser from its CDN script, so its class names never appear in _site.
  safelist: { greedy: [/leaflet/] },
};
