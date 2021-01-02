---
id: manifest
title: '@io-arc/task-manifest'
sidebar_label: manifest
slug: /plugins/task-manifest
---

Generate manifest.json for use with PWA, etc.

## Usage

```shell
$ npm i -D @io-arc/task-manifest

# once run
$ NODE_ENV=development MODE_ENV=once ia-manifest

# watch run
$ NODE_ENV=development MODE_ENV=watch ia-manifest
```

Or

```json title="package.json"
{
  "scripts": {
    "manifest": "ia-manifest"
  }
}
```

```shell
$ npm run manifest
```

## Specification

Put `manifest.yml` or `manifest**.yml` (e.g. `manifest-ios.yml`) directly under the workspace.  
If the file name is prefix with '\_'(e.g. `_manifest.yml`), it is not applicable.

Property see is the [MDN](https://developer.mozilla.org/ja/docs/Web/Manifest).

## Default

If no specific property is specified in `manifest.ym`l, the default value will be set automatically.

| property               | default                                          |
| ---------------------- | ------------------------------------------------ |
| `name`                 | [title][1]                                       |
| `short_name`           | [title][1]                                       |
| `scope`                | [siteRoot](../../configuration/site.md#siteroot) |
| `related_applications` | `[]`                                             |

[1]: ../../configuration/site.md#title
[2]: https://github.com/lorenwest/node-config.
