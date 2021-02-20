---
id: webpack-loaders-image
title: '@io-arc/webpack-loaders-image'
sidebar_label: webpack-loaders-image
slug: /plugins/modules/webpack-loaders-image.html
---

Image deploy for using [file-loader](https://github.com/webpack-contrib/file-loader).  
Auto insert image path to HTML, CSS and JavaScript.

## Usage

```shell
$ npm i @io-arc/webpack-loaders-image
```

```typescript title="index.ts"
import { ImageLoader, ImageMinPlugin } from '@io-arc/webpack-loaders-image'
import { DEPLOY_IMG_ARRAY } from '@io-arc/env'

export default {
  // (abbreviation)
  module: {
    rules: [ImageLoader([], DEPLOY_IMG_ARRAY, true)]
  },
  plugins: [ImageMinPlugin]
}
```

## Variables

### `ImageMinPlugin`

**Return: `webpack.Plugin`**

Using [image-minimizer-webpack-plugin](https://github.com/webpack-contrib/image-minimizer-webpack-plugin).

## Functions

### `ImageLoader(base, target, isHash)`

**Return: `webpack.RuleSetRule`**

Generate the file-loader information by specifying the output destination for each language, and the output destination for images.

**Parameters**

| params   | type       | default | description                                |
| -------- | ---------- | ------- | ------------------------------------------ |
| `base`   | `string[]` | \-      | Language build output directory name array |
| `target` | `string[]` | \-      | Image build output directory name array    |
| `isHash` | `boolean`  | \-      | Image path adding hash in 6-digit          |

**example**

```typescript title="webpack.config.ts"
import { ImageLoader } from '@io-arc/webpack-loaders-image'

export default {
  // (abbreviation)
  module: {
    rules: [ImageLoader(['common', 'js'], ['common', 'img'], true)]
  }
}
```
