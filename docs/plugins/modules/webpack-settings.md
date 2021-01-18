---
id: webpack-settings
title: '@io-arc/webpack-settings'
sidebar_label: webpack-settings
slug: /plugins/module-webpack-settings.html
---

webpack build settings.

## Usage

```shell
$ npm i @io-arc/webpack-settings
```

```typescript title="index.ts"
import {
  stats,
  performance,
  progressBar,
  jsOptimization
} from '@io-arc/webpack-settings'
import progressBarPlugin from 'progress-bar-webpack-plugin'

export default {
  // (abbreviation)
  optimization: jsOptimization,
  stats: stats(),
  performance: performance(),
  plugins: [new progressBarPlugin(progressBar('task name'))]
}
```

## Variables

### `jsOptimization`

**Return: `webpack.Options.Optimization`**

Get minify and common logic extraction settings for Babel, TypeScript, and JavaScript frameworks.  
The following information will be read automatically.

- [Configuration > Build > options.js.minify](../../configuration/build.md#optionsjsminify)
- [Configuration > Build > options.js.teaser](../../configuration/build.md#optionsjsteaser)
- [Configuration > Build > options.js.splitFilename](../../configuration/build.md#optionsjssplitfilename)

### `webpackDefine`

Global constant.  
Use with `webpack.DefinePlugin`.

**Return: `object`**

| const           | type      | description                                                             |
| --------------- | --------- | ----------------------------------------------------------------------- |
| `IS_PRODUCTION` | `boolean` | Whether the build mode is `NODE_ENV=production` or not                  |
| `SITE_TITLE`    | `string`  | [Configuration > Site > title](../../configuration/site.md#title)       |
| `SITE_URL`      | `string`  | [Configuration > Site > url](../../configuration/site.md#url)           |
| `SITE_AUTHOR`   | `string`  | [Configuration > Site > author](../../configuration/site.md#author)     |
| `SITE_ROOT`     | `string`  | [Configuration > Site > siteRoot](../../configuration/site.md#siteroot) |

**example**

```typescript title="webpack.config.ts"
import { webpackDefine } from '@io-arc/webpack-settings'
import webpack from 'webpack'

export default {
  // (abbreviation)
  plugins: [new webpack.DefinePlugin(webpackDefine)]
}
```

## Functions

### `stats(stats)`

**Return: `webpack.Configuration['stats']`**

A webpack parameter settings.  
Parameter types reference to [webpack stats](https://webpack.js.org/configuration/stats/)

**Parameters**

| params             | type                                                                                                                                                 | default | description            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------- |
| `stats` (optional) | `boolean` \| `'normal'` \| `'none'` \| `'verose'` \| `'errors-only'` \| `'errors-warnings` \| `'minimal'` \| `Configuration['stats']` \| `undefined` | (\*1)   | webpack stats settings |

**(\*1) Default**

```json
{
  "assets": true,
  "assetsSort": "field",
  "cached": true,
  "cachedAssets": true,
  "children": false,
  "chunks": false,
  "chunkModules": false,
  "chunkOrigins": false,
  "chunksSort": "field",
  "colors": true,
  "depth": false,
  "entrypoints": false,
  "errors": true,
  "errorDetails": true,
  "hash": undefined,
  "modules": false,
  "modulesSort": "field",
  "publicPath": true,
  "reasons": false,
  "source": true,
  "timings": true,
  "version": true,
  "warnings": true
}
```

### `performance(performance)`

**Return: `webpack.Configuration['performance']`**

A webpack performance settings.  
Parameter types reference to [webpack performance](https://webpack.js.org/configuration/performance/)

**Parameters**

| params                   | type                                                     | default | description         |
| ------------------------ | -------------------------------------------------------- | ------- | ------------------- |
| `performance` (optional) | `false` \| `Configuration['performance']` \| `undefined` | (\*2)   | webpack performance |

**(\*2) Default**

```json
{
  "hints": "error",
  "maxEntrypointSize": 5e6,
  "maxAssetSize": 10e6
}
```

### `progressBar(task)`

**Return: `{format: string; clear: boolean}`**

Using [progress-bar-webpack-plugin](https://github.com/clessg/progress-bar-webpack-plugin).  
Install required `npm i -D progress-bar-webpack-plugin`.

**Parameters**

| params | type     | default | description |
| ------ | -------- | ------- | ----------- |
| `task` | `string` | \-      | Task name   |
