---
id: build
title: Build Settings
slug: build.html
---

import Tags from '../../components/Tags'

Settings related to the build settings are specified in the `local.yml` or `local-development.yml` or `local-production.yml`.  
The initial value is set to the information you answered in the CLI dialog.

```yaml title="example (local.yml)"
# working directory (src/xxx)
wsDir:
  static: static
  html: html
  css: css
  js: js
  img: img
  yaml2json: yaml2json

# build output
outputDir: dist

# directory configuration
# array is hierarchy
deployDir:
  css: [common, css]
  js: [common, js]
  img: [common, img]
  json: [common, data]

# build options
options:
  html:
    minify: false

  pug:
    # php file output
    php: false

    # lint configuration file
    lint: '.pug-lintrc.json'

    # lint configuration file for using by vue
    vuePugLint: 'config-vue/.pug-lintrc.json'

  css:
    minify: false
    postcss:
      # using node-css-mqpacker for postcss
      mqpacker: true

  js:
    minify: true

    # If minify is true to enabled
    terser:
      parallel: true
      extractComments: false
      terserOptions:
        compress:
          drop_console: true

    # file names that combine the same logic
    splitFilename: assets

    sourceMap: true

    # The ESLint file to specify when building webpack
    eslint: '.eslintrc'

    # tsconfig.json which is specified at the time of webpack build
    tsconfig: tsconfig.json

  json:
    minify: true

  # file-loader settings
  fileLoader:
    html:
      # false is not use a file-loader
      use: true

      # adding 6-digit hash for image path.
      hash: true

      target:
        - tag: img
          attribute: src
          type: src
        - tag: img
          attribute: srcset
          type: srcset
        - tag: img
          attribute: data-src
          type: src
        - tag: img
          attribute: data-srcset
          type: srcset
        - tag: source
          attribute: src
          type: src

    css:
      use: true
      hash: true

    js:
      use: true
      hash: true

    vue:
      use: true
      # vue-loader transformAssetUrls
      loader:
        video: [src, poster]
        source: src
        img: src

# Override process.env.NODE_ENV
overrideEnv: development
```

## wsDir.xxx

A working directory in the `src` directory.  
You cannot change `src`.

```text
<project>
  └ src/ (working directory root)
    ├ [wsDir.static]/ (file copy)
    ├ [wsDir.html]/
    ├ [wsDir.css]/
    ├ [wsDir.js]/
    ├ [wsDir.img]/ (using file-loader)
    └ [wsDir.yaml2json]/
```

### wsDir.static

<Tags keys={['all']} />

**Default**: `static`

Copy the file as is to the output destination.  
If a directory exists, the entire directory is copied.

However, it does not copy files that begin with an underscore and dot prefix.

### wsDir.html

<Tags presets={['html']} />

**Default**: `html`

A working directory for HTML template engines.

### wsDir.css

<Tags presets={['css']} />

**Default**: `css`

A working directory for CSS languages.

### wsDir.js

<Tags presets={['js']} />

**Default**: `js`

A working directory for JavaScript preprocessors and frameworks.

### wsDir.img

<Tags presets={['html', 'css', 'js']} />

**Default**: `img`

A place to put images when using `file-loader (webpack)`.

### wsDir.yaml2json

<Tags keys={['yaml']} />

**Default**: `yaml2json`

A working directory for converting YAML files to json files.

---

## outputDir

<Tags keys={['all']} />

**Default**: `dist`

Build output directory.

---

## deployDir.xxx

Output destinations by language.

```text
<project>
  └ [outputDir]/
    ├ [deployDir.css]/ (from wsDir.css)
    ├ [deployDir.js]/ (from wsDir.js)
    ├ [deployDir.img]/ (from wsDir.img)
    └ [deployDir.json]/ (from wsDir.yaml2json)
```

The output destination hierarchy is specified by an array.

e.g. `dist/common/css` is `['common', 'css']`

However, the root of `HTML` and `Pug` is in `wsDir.html`.

e.g.  
`src/html/index.pug` => `dist/index.html`  
`src/html/foo/bar.pug` => `dist/foo/bar.html`

### deployDir.css

<Tags presets={['css']} />

**Default**: `['common', 'css']`

Output destination for CSS language.

### deployDir.js

<Tags presets={['js']} />

**Default**: `['common', 'js']`

Output destination for JavaScript preprocessors and frameworks.

### deployDir.img

<Tags presets={['html', 'css', 'js']} />

**Default**: `['common', 'img']`

Output destination when images are built using `file-loader (webpack)`.ss

### deployDir.json

<Tags keys={['yaml']} />

**Default**: `['common', 'data']`

Output destination for Yaml2Json.

---

## Build options

Optional settings for building with Webpack.

### options.html.minify

<Tags presets={['html']} />

**Default**: `false`

### options.pug.php

<Tags keys={['pug']} />

**Default**: `false`

Output as a PHP file at build time.  
e.g. `index.pug` => `index.php`

### options.pug.lint

<Tags keys={['pug']} />

**Default**: `'.pug-lintrc.json'`

Path to Pug's Lint configuration file from the project root.

### options.pug.vuePugLint

<Tags keys={['pug']} />

**Default**: `'config-vue/.pug-lintrc.json'`

Pug's Lint configuration file path that can only be set in Vue.js components.

### options.css.minify

<Tags presets={['css']} />

**Default**: `false`

### options.css.postcss.mqpacker

<Tags presets={['css']} keys={['vue']} />

**Default**: `true`

Using [node-css-mqpacker](https://github.com/hail2u/node-css-mqpacker).

### options.js.minify

<Tags presets={['js']} />

**Default**: `false`

### options.js.teaser

<Tags presets={['js']} />

**Default**:

```json
{
  "parallel": true,
  "extractComments": false,
  "terserOptions": { "compress": { "drop_console": true } }
}
```

Using [Terser plugin](https://webpack.js.org/plugins/terser-webpack-plugin/) if minify is true.

### options.js.splitFilename

<Tags presets={['js']} />

**Default**: `'assets'`

File names that combine the same logic.

### options.js.sourceMap

<Tags presets={['js']} />

**Default**: `false`

### options.js.eslint

<Tags presets={['js']} />

**Default**: `undefined`

Path of the ESLint configuration file to check when **building webpack**.  
If it is not set, Lint will not be executed.

### options.js.tsconfig

<Tags keys={['typescript', 'vue']} />

**Default**: `'tsconfig.json'`

Path of the TypeScript configuration file to check when **building webpack**.

### options.json.minify

<Tags keys={['yaml']} />

**Default**: `false`

---

## file-loader options

Settings for using file-loader.  
The `use` option specifies whether to use the file-loader.  
The `hash` option specifies whether to insert a 6-digit hash value after image files for cache protection.

### options.fileLoader.html.use

<Tags presets={['html']} />

**Default**: `true`

### options.fileLoader.html.hash

<Tags presets={['html']} />

**Default**: `true`

### options.fileLoader.html.target

<Tags presets={['html']} />

**Default**:

```json
[
  { "tag": "img", "attribute": "src", "type": "src" },
  { "tag": "img", "attribute": "srcset", "type": "srcset" },
  { "tag": "img", "attribute": "data-src", "type": "src" },
  { "tag": "img", "attribute": "data-srcset", "type": "srcset" },
  { "tag": "source", "attribute": "src", "type": "src" }
]
```

See reference of [html-loader#attributes](https://webpack.js.org/loaders/html-loader/#attributes).

### options.fileLoader.css.use

<Tags presets={['css']} keys={['vue']} />

**Default**: `true`

### options.fileLoader.css.hash

<Tags presets={['css']} />

**Default**: `true`

### options.fileLoader.js.use

<Tags keys={['babel', 'typescript']} />

**Default**: `true`

### options.fileLoader.js.hash

<Tags keys={['babel', 'typescript']} />

**Default**: `true`

### options.fileLoader.vue.use

<Tags keys={['vue']} />

**Default**: `true`

### options.fileLoader.vue.loader

<Tags keys={['vue']} />

**Default**:

```json
{
  "video": ["src", "poster"],
  "source": "src",
  "img": "src",
  "image": ["xlink:href", "href"],
  "use": ["xlink:href", "href"]
}
```

See reference of [vue-loader#transformAssetUrls](https://vue-loader.vuejs.org/options.html#transformasseturls).

---

## overrideEnv

<Tags keys={['all']} />

**Default**: `undefined`

For example, if you set `NODE_ENV=foo`, you can use `overrideEnv: development` to change the build-mode to develop because the build-mode of webpack does not have foo.
