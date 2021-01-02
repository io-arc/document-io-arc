---
id: path-build
title: '@io-arc/path-build'
sidebar_label: (TODO) path-build
slug: /plugins/module-path-build.html
---

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
