---
id: env-js
title: JavaScript Build Constants
sidebar_label: JavaScript
slug: js-constants.html
---

Constants mainly used when building [JavaScript preprocessor](../../../select-languages-and-frameworks.md#javascript-preprocessor) and [JavaScript frameworks](../../../select-languages-and-frameworks.md#javascript-frameworks).

## `WS_JS_ARRAY`

**Config Key: `wsDir.js`**  
**Return: `string[]`**  
**Default: `[WS_ROOT, 'js']`**

\* The `WS_ROOT` constant cannot be changed.

Array of working space directory names.

## `WS_JS_PATH`

**Config Key: -**  
**Return: `string`**

`WS_JS_ARRAY` converted to a path.

## `WS_JS_PATH_ABSOLUTE`

**Config Key: -**  
**Return: `string`**

The absolute path to the `WS_JS_PATH`.  
Same as `pwd` command.

## `JS_SPLIT_FILENAME`

**Config key: `options.js.splitFilename`**
**Return: `string | null`**  
**Default: `null`**

File names for splitting the common logic.

## `TSCONFIG`

**Config key: `options.js.tsconfig`**
**Return: `string`**  
**Default: `'tsconfig.json'`**

Path of the TypeScript configuration file to check when **building webpack**.

## `JS_SOURCE_MAP`

**Config key: `options.js.sourceMap`**
**Return: `boolean`**  
**Default: `false`**

Source map output.

## `ESLINT`

**Config key: `options.js.eslint`**
**Return: `string | undefined`**  
**Default: `undefined`**

Path of the eslint file to check when **building webpack**.

## `VUE_PUG_LINT_FILE`

**Config key: `options.pug.vuePugLint`**
**Return: `string | null`**  
**Default: `null`**

Pug's Lint configuration file path that can only be set in Vue.js components.

## `USE_JS_FILE_LOADER`

**Config key: `options.fileLoader.js.use`**
**Return: `boolean`**  
**Default: `true`**

Whether to use file-loader for images in JavaScript.

## `IS_HASH_JS_FILE_LOADER`

**Config key: `options.fileLoader.js.hash`**  
**Return: `boolean`**  
**Default: `true`**

Adding 6-digit hash for image path in JavaScript.  
\* Valid only if `USE_JS_FILE_LOADER` is `true`

## `VUE_LOADER_ASSETS`

**Config key: `options.fileLoader.vue.loader`**  
**Return: `{ [p: string]: string | string[] }`**  
**Default:**

```json title="options.fileLoader.vue.use === true"
{
  "video": ["src", "poster"],
  "source": "src",
  "img": "src",
  "image": ["xlink:href", "href"],
  "use": ["xlink:href", "href"]
}
```

```json title="options.fileLoader.vue.use === false"
{}
```

[vue-loader#transformAssetUrls](https://vue-loader.vuejs.org/options.html#transformasseturls) options.

## `JS_MINIFY`

**Config key: `options.js.minify`**  
**Return: `boolean`**  
**Default: `false`**

Minify of build files.

## `JS_TERSER`

**Config key: `options.js.terser`**  
**Return: `object`**  
**Default:**

```json
{
  "parallel": true,
  "extractComments": false,
  "terserOptions": { "compress": { "drop_console": true } }
}
```

Using [Terser plugin](https://webpack.js.org/plugins/terser-webpack-plugin/) if minify is `true`.

## `OUTPUT_JS_ARRAY`

**Config key: `deployDir.js`**  
**Return: `string[]`**  
**Default: `['common', 'js']`**

Array of output directory names.

## `OUTPUT_JS_PATH_ABSOLUTE`

**Config key: -**  
**Return: `string`**

The absolute path of `DIST` + `OUTPUT_JS_ARRAY`.  
Same as `pwd` command.
