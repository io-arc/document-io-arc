---
id: webpack-loaders-pug-linter
title: '@io-arc/webpack-loaders-pug-linter'
sidebar_label: (TODO) webpack-loaders-pug-linter
slug: /plugins/module-webpack-loaders-pug-linter.html
---

## Usage

```shell
$ npm i @io-arc/webpack-loaders-pug-linter
```

```typescript title="index.ts"
import PugLintLoader from '@io-arc/webpack-loaders-pug-linter'
import lint from '../.pug-lintrc.json'

export default {
  // (abbreviation)
  module: {
    rules: [PugLintLoader(/^(?!_).*\.pug$/, 'pug-lint-loader', lint)]
  }
}
```
