---
id: env-common
title: Common Constants
sidebar_label: Common
slug: common-constants.html
---

Common constants that are not related to the language build.

### `BUILD`

Constants for comparison of build environments.

| Property            | Result          |
| ------------------- | --------------- |
| `BUILD.DEVELOPMENT` | `'development'` |
| `BUILD.PRODUCTION`  | `'production'`  |
| `BUILD.TEST`        | `'test'`        |
| `BUILD.NONE`        | `'none'`        |

### `NODE_ENV`

**Config Key: -** (\* override: `overrideEnv`)  
**Return: `string`**  
**Default: `'development'`**

Build environment.  
Using `process.env.NODE_ENV`.

However, if `overrideEnv` is defined in using [node-config][config], it can be overridden.
This feature is useful in webpack build mode, for example.

**example 1**

```shell
$ NODE_ENV=development npm run XXX
```

```typescript
import { NODE_ENV } from '@io-arc/env'

console.log(NODE_ENV)
// -> 'development'
```

**example 2** (Using `overrideEnv`)

```yaml title="config/local-test.yml"
overrideEnv: development
```

```shell
$ NODE_ENV=test npm run XXX
```

```typescript
import { NODE_ENV } from '@io-arc/env'

console.log(NODE_ENV)
// -> 'development'

console.log(process.env.NODE_ENV)
// -> 'test'
```

### `MODE`

Constants for comparison of build mode.

| Property     | Result    |
| ------------ | --------- |
| `MODE.ONCE`  | `'once'`  |
| `MODE.WATCH` | `'watch'` |

### `MODE_ENV`

**Config Key: -**  
**Return: `string`**  
**Default: `'once'`**

Build mode.

**example**

```shell
$ MODE_ENV=watch npm run XXX
```

```typescript
import { MODE_ENV } from '@io-arc/env'

console.log(MODE_ENV)
// -> 'watch'

if (MODE_ENV === MODE.WATCH) {
  // processing...
}
```

### `WS_ROOT`

**Config Key: -**  
**Return: `'src'`**

Working space directory.  
Fixed to `'src'` and cannot be rewritten.

### `WS_ROOT_ABSOLUTE`

**Config Key: -**  
**Return: `string`**

The absolute path to the workspace.  
Same as `pwd` command.

### `IS_PRODUCTION`

**Config Key: -**  
**Return: `boolean`**

True/false value of whether `NODE_ENV` is `BUILD.PRODUCTION` or not.

### `DIST`

**Config Key: `outputDir`**  
**Return: `string`**  
**Default: `'dist'`**

Root of the output directory.

### `DIST_ABSOLUTE`

The absolute path from the project directory to `DIST`.

[config]: https://github.com/lorenwest/node-config
