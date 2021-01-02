---
id: js
title: JavaScript preprocessor and framework build
sidebar_label: JavaScript
---

import Tags from '../../components/Tags'

## Constants

<Tags presets={['js']} />

The values set in [Site Setting](../configuration/site.md) and [Build Settings](../configuration/build.md) can be used in the template engine.

| constants          | description                                            | [node-config][1] key |
| ------------------ | ------------------------------------------------------ | -------------------- |
| `IS_PRODUCTION`    | Whether the build mode is `NODE_ENV=production` or not | \-                   |
| `SITE_TITLE`       | Site title                                             | `title`              |
| `SITE_URL`         | Site URL                                               | `url`                |
| `SITE_AUTHOR`      | Site author                                            | `author`             |
| `SITE_DESCRIPTION` | Site description                                       | `description`        |
| `SITE_ROOT`        | Site root path (e.g. `/`)                              | `siteRoot`           |
| `CONFIG`           | Reference to below                                     | \-                   |

If you want to use [node-config][1] configuration information other than the available constants, you can use the `CONFIG` constants.

```yaml title="config/development.yml"
api: https://foo.com
```

```javascript title="Apps.ts"
console.log(CONFIG.api)
// result => https://foo.com
```

\* If you are using TypeScript, please define the type by yourself.

## Splitting the common logic

<Tags presets={['js']} />

If two or more files have common logic, extract the common logic and put it in a separate file.  
For example, it's useful when you have a library like lodash or jQuery.

You can specify the file name of the common logic.  
The extraction file name is specified by [Build Settings](../configuration/build.md#optionsjssplitfilename).

## Library visualizer

<Tags presets={['js']} />

Using [webpack-visualizer-plugin](https://github.com/chrisbateman/webpack-visualizer).  
Visualizer build run to mode is "once".

Output is `<project>/stats`.

## Web Worker

<Tags presets={['js']} />

Create a web worker using [worker-loader](https://github.com/webpack-contrib/worker-loader).

**example**

```typescript title="workers/Worker.ts"
const ctx: Worker = self as any

// Post data to parent thread
ctx.postMessage({ foo: 'foo' })

// Respond to message from parent thread
ctx.addEventListener('message', (event) => console.log(event))

export default null as any
```

```typescript title="Apps.ts"
import Worker from './workers/Worker'

const worker = new Worker()

worker.postMessage({ a: 1 })
worker.onmessage = (event) => {
  // some kind of processing
}

worker.addEventListener('message', (event) => {
  // some kind of processing
})
```

## Service Worker

<Tags presets={['js']} />

[See plugins document](../plugins/tasks/service-worker.md).

[1]: https://github.com/lorenwest/node-config
