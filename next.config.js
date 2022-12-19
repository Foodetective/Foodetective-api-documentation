const path = require("path");
const withMarkdoc = require("@markdoc/next.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdoc"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  eslint: {
    dirs: ["pages", "components", "lib", "src", "markdoc"],
  },
};

module.exports =
  withMarkdoc(/* config: https://markdoc.io/docs/nextjs#options */)(nextConfig);
