---
id: utils
title: '@io-arc/utils'
sidebar_label: utils
slug: /plugins/modules/utils.html
---

Utility functions and webpack extends.

## Usage

```shell
$ npm i @io-arc/utils
```

```typescript title="index.ts"
import { AssetsDirPath } from '@io-arc/utils'

const res = AssetsDirPath(['common', 'css'])
```

## Utility Functions

### `AssetsDirPath(dir)`

**Returns: `string`**

Website assets directory path.

**Parameters**

| params | type       | default | description          |
| ------ | ---------- | ------- | -------------------- |
| `dir`  | `string[]` | \-      | Directory name array |

**example**

```typescript
const res = AssetsDirPath(['common', 'css'])
console.log(res)
// -> common/css
```

### `siteRootRelative(dir)`

**Returns: `string`**

Create a relative path from site root.  
Site root define is [`SITE_ROOT`](../../configuration/site.md#siteroot).

**Parameters**

| params | type       | default | description          |
| ------ | ---------- | ------- | -------------------- |
| `dir`  | `string[]` | \-      | Directory name array |

**example 1**

```yaml title="default.yml"
siteRoot: /
```

```typescript
const result1 = siteRootRelative([])
// -> '/'

const result2 = siteRootRelative(['abc', 'def'])
// -> '/abc/def/'
```

**example 2**

```yaml title="default.yml"
siteRoot: /foo/
```

```typescript
const result1 = siteRootRelative([])
// -> '/foo/'

const result2 = siteRootRelative(['abc', 'def'])
// -> '/foo/abc/def/'
```

## Webpack extends Methods

Extend build of HTML, CSS, JavaScript.  
[See settings](../../configuration/webpack.md).

```typescript title="webpack.config.ts"
import { WebpackExtend } from '@io-arc/utils'

// User extends
const extend = new WebpackExtend('js')
const externals = extend.externals()
const extendsLoaders = extend.loaders() || []
const extendPlugins = extend.plugins() || []

export default {
  // (abbreviation)
  externals: externals,
  module: {
    rules: [...extendsLoaders]
  },
  plugins: [...plugins]
}
```

### Instance parameters

| params   | type                    | default | description                                            |
| -------- | ----------------------- | ------- | ------------------------------------------------------ |
| `target` | `html` \| `css` \| `js` | \-      | Specify a property that exists in `webpack.extends.js` |

### `data()`

**Returns: `object(*)` | `null`**

```typescript title="* Return object"
import { ExternalsElement, RuleSetRule, Plugin } from 'webpack'

interface IfWebpackExtend {
  externals?: ExternalsElement | ExternalsElement[]
  loaders?: RuleSetRule[]
  plugins?: Plugin[]
  [key: string]: any
}
```

Get all information in the specified target.

### `externals()`

**Return: `ExternalsElement` | `ExternalsElement[]`**  
See [webpack#externals](https://webpack.js.org/configuration/externals/).

### `loaders()`

**Returns: `RuleSetRule[]`**  
See [webpack#rule](https://webpack.js.org/configuration/module/#rule).

### `plugins()`

**Returns: `Plugin[]`**  
See [webpack#plugins](https://webpack.js.org/configuration/plugins/)
