---
id: env-html
title: HTML Build Constants
sidebar_label: HTML
slug: html-constants.html
---

Constants mainly used when building [HTML template engine](../../../select-languages-and-frameworks.md#html-template-engine).

### `WS_HTML_ARRAY`

**Config Key: `wsDir.html`**  
**Return: `string[]`**  
**Default: `[WS_ROOT, 'html']`**

\* The `WS_ROOT` constant cannot be changed.

Working space for HTML directory name array.

### `WS_HTML_PATH`

**Config Key: -**  
**Return: `string`**

The absolute path to the HTML directory of the workspace.  
Same as `pwd` command.

### `WS_HTML_PATH_ABSOLUTE`

**Config Key: -**  
**Return: `string`**

The absolute path to the html directory.

### `OUTPUT_IN_PHP`

**Config key: `options.pug.php`**  
**Return: `boolean`**  
**Default: `false`**

Pug build output to PHP.

### `PUG_LINT_FILE`

**Config key: `options.pug.lint`**  
**Return: `string | null`**  
**Default: `null`**

The name of the lint file to use for checking when compiling Pug with webpack.

### `USE_HTML_FILE_LOADER`

**Config key: `options.fileLoader.html.use`**
**Return: `boolean`**  
**Default: `true`**

Whether to use file-loader for images in HTML.

### `IS_HASH_HTML_FILE_LOADER`

**Config key: `options.fileLoader.html.hash`**  
**Return: `boolean`**  
**Default: `true`**

Adding 6-digit hash for image path in HTML.  
\* Valid only if `USE_HTML_FILE_LOADER` is `true`

### `TARGET_HTML_FILE_LOADER`

**Config key: `options.fileLoader.html.target`**  
**Return: `object`**  
**Default:**

```json
[
  { "tag": "img", "attribute": "src", "type": "src" },
  { "tag": "img", "attribute": "srcset", "type": "srcset" },
  { "tag": "img", "attribute": "data-src", "type": "src" },
  { "tag": "img", "attribute": "data-srcset", "type": "srcset" },
  { "tag": "source", "attribute": "src", "type": "src" }
]
```

Target for file-loader.  
\* Valid only if `USE_HTML_FILE_LOADER` is `true`

### `HTML_MINIFY`

**Config key: `options.html.minify`**  
**Return: `boolean`**  
**Default: `false`**

Minify of HTML files.
