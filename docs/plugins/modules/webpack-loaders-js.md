---
id: webpack-loaders-js
title: '@io-arc/webpack-loaders-js'
sidebar_label: (TODO) webpack-loaders-js
slug: /plugins/module-webpack-loaders-js.html
---

## Usage

```shell
$ npm i @io-arc/webpack-loaders-js
```

```typescript title="index.ts"
import { yamlLoader } from '@io-arc/webpack-loaders-js'

export default {
  // (abbreviation)
  module: {
    rules: [yamlLoader]
  }
}
```
