---
id: path-build
title: '@io-arc/path-build'
sidebar_label: path-build
slug: /plugins/module-path-build.html
---

Convert an array to a relative or absolute path.

## Usage

```shell
$ npm i @io-arc/path-build
```

```typescript title="index.ts"
import PathBuild from '@io-arc/path-build'

const dist = PathBuild.relative(['abc', 'def'])
// -> 'abc/def'

const ab = PathBuild.absolute(['abc', 'def'])
// -> '/Users/xxxx/xxxx/abc/def'
```

## Methods

No `New` instance.  
This class is static function.

### `PathBuild.relative(dir)`

**Return: `string`**

Create path join.  
Near as `path.join` in `node.js`.

**Parameters**

| params | type       | default | description                              |
| ------ | ---------- | ------- | ---------------------------------------- |
| `dir`  | `string[]` | \-      | Array of directory names to be converted |

### `PathBuild.absolute(dir)`

**Return: `string`**

Create an absolute path from root.  
Near as `path.resolve` in `node.js`.

**Parameters**

| params | type       | default | description                              |
| ------ | ---------- | ------- | ---------------------------------------- |
| `dir`  | `string[]` | \-      | Array of directory names to be converted |
