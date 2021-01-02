---
id: clean
title: '@io-arc/task-clean'
sidebar_label: clean
slug: /plugins/task-clean.html
---

Delete the contents of the output and stats directory.

## Usage

```shell
$ npm i -D @io-arc/task-clean
$ ia-clean
```

Or

```json title="package.json"
{
  "scripts": {
    "clean": "ia-clean"
  }
}
```

```shell
$ npm run clean
```

## Clean target

- [Output directory](../../configuration/build.md#outputdir)
- [Build library visualizer](../../build/js.md#library-visualizer)
