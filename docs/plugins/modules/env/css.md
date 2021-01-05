---
id: env-css
title: CSS Build Constants
sidebar_label: CSS
slug: css-constants.html
---

Constants mainly used when building [CSS language](../../../select-languages-and-frameworks.md#css-language).

## `WS_CSS_ARRAY`

**Config Key: `wsDir.css`**  
**Return: `string[]`**  
**Default: `[WS_ROOT, 'css']`**

\* The `WS_ROOT` constant cannot be changed.

Array of working space directory names.

## `WS_CSS_PATH`

**Config Key: -**
**Return: `string`**

`WS_CSS_ARRAY` converted to a path.

## `WS_CSS_PATH_ABSOLUTE`

**Config Key: -**  
**Return: `string`**

The absolute path to the `WS_CSS_PATH`.  
Same as `pwd` command.

## `USE_CSS_FILE_LOADER`

**Config key: `options.fileLoader.css.use`**
**Return: `boolean`**  
**Default: `true`**

Whether to use file-loader for images in CSS.

## `IS_HASH_CSS_FILE_LOADER`

**Config key: `options.fileLoader.css.hash`**  
**Return: `boolean`**  
**Default: `true`**

Adding 6-digit hash for image path in CSS.  
\* Valid only if `USE_CSS_FILE_LOADER` is `true`

## `CSS_MINIFY`

**Config key: `options.css.minify`**  
**Return: `boolean`**  
**Default: `false`**

Minify of build files.

## `CSS_POSTCSS_MQ_PACKER`

**Config key: `options.css.postcss.mqpacker`**  
**Return: `boolean`**  
**Default: `true`**

Using [node-css-mqpacker](https://github.com/hail2u/node-css-mqpacker) of post-css.

## `OUTPUT_CSS_ARRAY`

**Config key: `deployDir.css`**  
**Return: `string[]`**  
**Default: `['common', 'css']`**

Array of output directory names.

## `OUTPUT_CSS_PATH_ABSOLUTE`

**Config key: -**  
**Return: `string`**

The absolute path of `DIST` + `OUTPUT_CSS_ARRAY`.  
Same as `pwd` command.
