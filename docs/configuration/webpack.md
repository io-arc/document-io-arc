---
id: webpack
title: Extending the webpack
slug: webpack.html
---

There are several extensions available on the user side as well.  
The extension is configured in `<project>/config/webpack.extends.js`.

The extensible webpack options are as follows.

- [externals](https://webpack.js.org/configuration/externals/)
- [module rule](https://webpack.js.org/configuration/module/#rule)
- [plugins](https://webpack.js.org/configuration/plugins/)

## example

```js title="/config/webpack.extends.js"
const Foobar = require('foo-bar')

module.exports = {
  // HTML(with handlebars) / Pug
  html: {},

  // CSS / SASS(SCSS) / Stylus
  css: {},

  // TypeScript / Babel / JavaScript framework
  js: {
    // See: https://webpack.js.org/configuration/externals/
    externals: {
      jquery: 'jQuery'
    },

    // See: https://webpack.js.org/configuration/module/#rule
    loaders: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ],

    // See: https://webpack.js.org/configuration/plugins/
    plugins: [new FooBar()]
  }
}
```
