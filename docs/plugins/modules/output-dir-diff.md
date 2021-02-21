---
id: output-dir-diff
title: '@io-arc/output-dir-diff'
sidebar_label: output-dir-diff
slug: /plugins/modules/output-dir-diff.html
---

A relative path to another directory from one directory.

## Usage

```shell
$ npm i @io-arc/output-dir-diff
```

```typescript title="index.ts"
import OutputDirDiff from '@io-arc/output-dir-diff'

const diff = new OutputDirDiff(['foo', 'bar'], ['foo'])
const res = diff.targetRelativePath()
console.log(res)
// -> '../'
```

## Methods

### Instance parameters

If the `target` does not match the `base`, go back through the entire `base` array.

| params   | type       | default | description                        |
| -------- | ---------- | ------- | ---------------------------------- |
| `base`   | `string[]` | \-      | Array of directory names to search |
| `target` | `string[]` | \-      | An array of target directories     |

### `targetRelativePath()`

Obtain the difference between base and target with a relative path.

**example**

```typescript
import OutputDirDiff from '@io-arc/output-dir-diff'

const diff = new OutputDirDiff(['foo', 'bar'], ['foo'])
const res = diff.targetRelativePath()
console.log(res)
// -> '../'

const diff2 = new OutputDirDiff(['foo', 'bar', 'abc'], ['foo'])
const res2 = diff2.targetRelativePath()
console.log(res2)
// -> '../../'

// No match
const diff3 = new OutputDirDiff(['foo', 'bar', 'abc'], ['def'])
const res3 = diff3.targetRelativePath()
console.log(res3)
// -> '../../../def'
```
