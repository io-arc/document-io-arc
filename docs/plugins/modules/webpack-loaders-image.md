---
id: webpack-loaders-image
title: '@io-arc/webpack-loaders-image'
sidebar_label: (TODO) webpack-loaders-image
slug: /plugins/module-webpack-loaders-image.html
---

## Usage

```shell
$ npm i @io-arc/webpack-loaders-image
```

```typescript title="index.ts"
import { ImageLoader } from '@io-arc/webpack-loaders-image'
import { DEPLOY_IMG_ARRAY } from '@io-arc/env'

export default {
  // (abbreviation)
  module: {
    rules: [ImageLoader([], DEPLOY_IMG_ARRAY, true)]
  }
}
```
