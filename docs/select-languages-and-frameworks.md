---
id: select-languages-and-frameworks
title: Select languages and frameworks
description: Available languages and frameworks
slug: select-languages-and-frameworks.html
---

## HTML template engine

- HTML (with [handlebars](https://handlebarsjs.com/))
- [Pug](https://pugjs.org/)

## CSS language

- CSS
- [SASS (Sass/Scss)](https://sass-lang.com/)
- [Stylus](https://stylus-lang.com/)

## JavaScript preprocessor

- [Babel](https://babeljs.io/) (Default: 7.9.6)
- [TypeScript](https://www.typescriptlang.org/) (Default: latest)

To update the version, please use the command after creating the boilerplate.  
e.g. `npm i -D typescript@4.1.3`.

## JavaScript frameworks

Automatically available in selected preprocessors.

- [Vue](https://vuejs.org/) (Babel/TypeScript)

:::tip

After creating the boilerplate, if you want to change the language or other settings, you can do so by installing the necessary plugins or creating your own and modifying `webpack.config.js`.

[Plugins](plugins/) we have available.
:::
