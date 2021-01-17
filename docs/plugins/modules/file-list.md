---
id: file-list
title: '@io-arc/file-list'
sidebar_label: file-list
slug: /plugins/module-file-list.html
---

Get the file list.

## Usage

```shell
$ npm i @io-arc/file-list
```

```typescript title="index.ts"
import { FileListObject } from '@io-arc/file-list'

const res = FileListObject('foo', 'js')
// -> Result: {abc: 'foo/abc.js', 'foo/bar/def': 'foo/bar/def.js'}
```

## Functions

### `FileListObject(dir, ext[, rootOnly])`

**Return: `{[key: string]: string}`**

Get a list of files as an object recursively by specifying the directory and extension.
The key name of the object will be the file name.

**Parameters**

| params                | type      | default | description                                       |
| --------------------- | --------- | ------- | ------------------------------------------------- |
| `dir`                 | `string`  | \-      | Target directory name                             |
| `ext`                 | `string`  | \-      | Extension name                                    |
| `rootOnly` (optional) | `boolean` | `false` | Only files directly under the specified directory |

**example**

```text title="Directory"
data/
  ├ abc.js
  ├ def.js
  ├ ghi.json
  └ foo/
      ├ jkl.js
      └ mno.json
```

```typescript
import { FileListObject } from '@io-arc/file-list'

const res1 = FileListObject('data', 'js')
console.log(res1)
// -> { abc: 'data/abc.js', def: 'data/def.js', 'foo/jkl': 'data/foo/jkl.js' }

const res2 = FileListObject('data', 'json', true)
console.log(res2)
// -> { ghi: 'data/ghi.json' }
```
