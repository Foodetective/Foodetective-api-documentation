const withMarkdoc = require('@markdoc/next.js');
const path = require('path')

module.exports =
  withMarkdoc(/* config: https://markdoc.io/docs/nextjs#options */)({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  });
