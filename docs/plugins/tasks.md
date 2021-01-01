---
id: tasks
title: Task plugins
sidebar_label: (TODO) Tasks
---

## browser-sync

Start the local server.

```shell
$ npm i -D @io-arc/task-browser-sync
$ ia-browser-sync [options]
```

[See](../configuration/browser-sync.md) how to set it up.

### Options

#### `--proxy <IP address>, -p <IP address>`

Using proxy.  
Specify an IP address for the argument.

#### `--history <file path>`

File paths used by the HTML5 HistoryAPI.  
e.g. `/index.html`

## clean

Delete the contents of the output and stats directory.

```shell
$ npm i -D @io-arc/task-clean
$ ia-clean
```

## copy

If you put a file in the directory set in [Build Settings#wsDir.static](../configuration/build.md#wsdirstatic), it will be copied as is.  
On the other hand, if you delete or rename a file, the old file will be deleted from the output directory.

```shell
$ npm i -D @io-arc/task-copy

# once run
$ NODE_ENV=development MODE=once ia-copy

# watch run
$ NODE_ENV=development MODE=watch ia-copy
```

## manifest

Generate manifest.json for use with PWA, etc.

```shell
$ npm i -D @io-arc/task-manifest

# once run
$ NODE_ENV=development MODE=once ia-manifest

# watch run
$ NODE_ENV=development MODE=watch ia-manifest
```

### Specification

Put `manifest.yml` or `manifest**.yml` (e.g. `manifest-ios.yml`) directly under the workspace.  
If the file name is prefix with '\_'(e.g. `_manifest.yml`), it is not applicable.

Property see is the [MDN](https://developer.mozilla.org/ja/docs/Web/Manifest).

### Default

If no specific property is specified in `manifest.ym`l, the default value will be set automatically.

| property               | default                                       |
| ---------------------- | --------------------------------------------- |
| `name`                 | [title][1]                                    |
| `short_name`           | [title][1]                                    |
| `scope`                | [siteRoot](../configuration/site.md#siteroot) |
| `related_applications` | `[]`                                          |

[1]: ../configuration/site.md#title
[2]: https://github.com/lorenwest/node-config

## service-worker

Create a Service Worker file.

```shell
$ npm i -D @io-arc/task-service-worker
$ ia-sw [options]
```

### Options

#### `--template, -t`

Create a template to `sw.js`.

## webpack-babel

WIP

## webpack-css

WIP

## webpack-html

WIP

## webpack-pug

WIP

## webpack-sass

WIP

## webpack-stylus

WIP

## webpack-typescript

WIP

## webpack-vue

WIP

## webpack-vue-typescript

WIP

## yaml2json

YAML to JSON conversion.

```shell
$ npm i -D @io-arc/task-yaml2json

# once run
$ NODE_ENV=development MODE=once ia-yaml2json

# watch run
$ NODE_ENV=development MODE=watch ia-yaml2json
```

### Specification

Converts the YAML file in the working space to a JSON file and outputs it.

**Working Directory**: [wsDir.yaml2json](../configuration/build.md#wsdiryaml2json)  
**Output Directory**: [outputDir](../configuration/build.md#outputdir)/[deployDir.json](../configuration/build.md#deploydirjson)  
**Minify**: [options.json.minify](../configuration/build.md#optionsjsonminify)
