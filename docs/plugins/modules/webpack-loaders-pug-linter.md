---
id: webpack-loaders-pug-linter
title: '@io-arc/webpack-loaders-pug-linter'
sidebar_label: webpack-loaders-pug-linter
slug: /plugins/modules/webpack-loaders-pug-linter.html
---

A webpack loader that handles Pug's Lint.

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

## Functions

### `PugLintLoader(regex, loader[, linter])`

**Return: `webpack.RuleSetRule`**

Setting Pug lint loader.

**Parameters**

| params   | type     | default | description                        |
| -------- | -------- | ------- | ---------------------------------- |
| `regex`  | `RegExp` | \-      | Target regular expression          |
| `loader` | `string` | \-      | Specify the Pug Lint loader to use |
| `linter` | `object` | (\*)    | Lint settings                      |

**(\*) Lint default**

```json
{
  "validateIndentation": 2,
  "requireClassLiteralsBeforeAttributes": true,
  "requireIdLiteralsBeforeAttributes": true,
  "requireLowerCaseAttributes": true,
  "requireLowerCaseTags": true,
  "requireSpaceAfterCodeOperator": true,
  "requireSpecificAttributes": [{ "img": ["alt"] }],
  "requireStrictEqualityOperators": true
}
```
