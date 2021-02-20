---
id: copy
title: '@io-arc/task-copy'
sidebar_label: copy
slug: /plugins/tasks/copy.html
---

If you put a file in the directory set in [Build Settings#wsDir.static](../../configuration/build.md#wsdirstatic), it will be copied as is.  
On the other hand, if you delete or rename a file, the old file will be deleted from the output directory.

## Usage

```shell
$ npm i -D @io-arc/task-copy

# once run
$ NODE_ENV=development MODE_ENV=once ia-copy

# watch run
$ NODE_ENV=development MODE_ENV=watch ia-copy
```

Or

```json title="package.json"
{
  "scripts": {
    "copy": "ia-copy"
  }
}
```

```shell
$ npm run copy
```
