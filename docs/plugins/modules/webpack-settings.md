---
id: webpack-settings
title: '@io-arc/webpack-settings'
sidebar_label: (TODO) webpack-settings
slug: /plugins/module-webpack-settings.html
---

## Usage

```shell
$ npm i @io-arc/webpack-settings
```

```typescript title="index.ts"
import { stats, performance, progressBar } from '@io-arc/webpack-settings'
import progressBarPlugin from 'progress-bar-webpack-plugin'

export default {
  // (abbreviation)
  stats: stats(),
  performance: performance(),
  plugins: [new progressBarPlugin(progressBar('task name'))]
}
```
