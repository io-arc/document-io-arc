---
id: service-worker
title: '@io-arc/task-service-worker'
sidebar_label: service-worker
slug: /plugins/tasks/service-worker.html
---

Create a Service Worker file.  
Execute `src/sw.js` if it exists.  
It is created using `generateSW` of [WorkBox](https://developers.google.com/web/tools/workbox/modules/workbox-build).

\* There's no watch mode.

## Usage

```shell
$ npm i -D @io-arc/task-service-worker
$ ia-sw [options]
```

Or

```json title="package.json"
{
  "scripts": {
    "service-worker": "ia-sw",
    "service-worker-template": "ia-sw --template"
  }
}
```

```shell
$ npm run service-worker
$ npm run serivce-worker-template
```

## Options

### `--template, -t`

Create a template to `sw.js`.

## sw.js

The minimum configuration required for execution.

```javascript title="src/sw.js"
module.exports = {
  manifest: {}
}
```

The `globDirectory` and `swDest` properties, which are required by WorkBox, are ignored even if they are specified because they are generated automatically.

## Changing output file name

Default output file name is `sw.js`, but you can change the file name.

```js title="src/sw.js"
module.exports = {
  filename: 'foo.js',
  manifest: {}
}

// output 'path/dist/foo.js'
```

## Manifest options

Take a look at [WorkBox#generateSW](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW)

**example**

```js title="src/sw.js"
module.exports = {
  manifest: {
    ignoreURLParametersMatching: [/^utm_/],
    directoryIndex: 'index.html',
    globFollow: true,
    globIgnores: ['node_modules/**/*'],
    sourcemap: false
  }
}
```
