---
id: output-dir-diff
title: '@io-arc/output-dir-diff'
sidebar_label: (TODO) output-dir-diff
slug: /plugins/module-output-dir-diff.html
---

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
