---
id: webpack-loaders-js
title: '@io-arc/webpack-loaders-js'
sidebar_label: webpack-loaders-js
slug: /plugins/modules/webpack-loaders-js.html
---

A webpack loader for handling Babel and TypeScript.

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

## Variables

### `yamlLoader`

**Return: `webpack.RuleSetRule`**

Read YAML files.  
Install required of `npm i -D yaml-loader`.

### `workerLoader`

**Return: `webpack.RuleSetRule`**

Create a webWorker files.  
Install required of `npm i -D worker-loader`.

### `babelLoader`

**Return: `webpack.RuleSetRule`**

Babel to JavaScript files.  
Install required of `npm i -D babel-loader @babel/core @babel/preset-env`

## Functions

### `TypescriptLoader(vue)`

**Return: `webpack.RuleSetRule`**

TypeScript to JavaScript files.

**Parameters**

| params           | type      | default | description  |
| ---------------- | --------- | ------- | ------------ |
| `vue` (optional) | `boolean` | `false` | Using Vue.js |

Install of `npm i -D ts-loader`

### `EslintLoader(eslint)`

**Return: `webpack.RuleSetRule`**

Using EsLint.  
Install required of `npm i -D eslint-loader`.

**Parameters**

| params              | type     | default | description                                                |
| ------------------- | -------- | ------- | ---------------------------------------------------------- |
| `eslint` (optional) | `string` | `''`    | Eslint file path<br />Eslint file of project root if empty |
