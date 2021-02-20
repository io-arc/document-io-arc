---
id: browser-sync
title: '@io-arc/task-browser-sync'
sidebar_label: browser-sync
slug: /plugins/tasks/browser-sync.html
---

Start the local server.

## Usage

```shell
$ npm i -D @io-arc/task-browser-sync
$ ia-browser-sync [options]
```

Or

```json title="package.json"
{
  "scripts": {
    "browser-sync": "ia-browser-sync",
    "browser-sync-history": "ia-browser-sync --history"
  }
}
```

```shell
$ npm run browser-sync
$ npm run browser-sync-history
```

## Options

### `--proxy <IP address>, -p <IP address>`

Using proxy.  
Specify an IP address for the argument.

### `--history <file path>`

File paths used by the HTML5 HistoryAPI.  
e.g. `/index.html`

## Configure file

If you want to make detailed settings, please prepare and specify a configuration file.  
The configuration file is be placed in the `config` directory.

### Valid file name

- /config/browser-sync.yml
- /config/bs.yml

If there are more than one valid files, they are prioritized in the order listed above.  
[See](https://browsersync.io/docs/options) a BrowserSync options.

## Default

Some parameters are specified automatically if not specified.

### `server`

Default: [`outputDir`](../../configuration/build.md#outputdir)

\* If proxy parameter exists then auto delete `server`

### `serveStatic`

Only if [`siteRoot`](../../configuration/site.md#siteroot) isn't a `/`.

Default: `{ route: ['/'], dir: 'dist' }`
