const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/katethornley/Documents/GitHub/KateAThornley.github.io/SEG3125-lab8/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/katethornley/Documents/GitHub/KateAThornley.github.io/SEG3125-lab8/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/katethornley/Documents/GitHub/KateAThornley.github.io/SEG3125-lab8/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/katethornley/Documents/GitHub/KateAThornley.github.io/SEG3125-lab8/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/katethornley/Documents/GitHub/KateAThornley.github.io/SEG3125-lab8/src/pages/blog.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/katethornley/Documents/GitHub/KateAThornley.github.io/SEG3125-lab8/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/katethornley/Documents/GitHub/KateAThornley.github.io/SEG3125-lab8/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/katethornley/Documents/GitHub/KateAThornley.github.io/SEG3125-lab8/src/pages/page-2.js")))
}

