---
id: bs
title: BrowserSync Settings
slug: browser-sync
---

Using [BrowserSync](https://browsersync.io/).

## Configure file

If you want to make detailed settings, please prepare and specify a configuration file.  
The configuration file is be placed in the `config` directory.

### Valid file name

- browser-sync.yml
- bs.yml

If there are more than one valid files, they are prioritized in the order listed above.  
[See](https://browsersync.io/docs/options) a BrowserSync options

## Default

Some parameters are specified automatically if not specified.

### `server`

Default: [`outputDir`](build.md#outputdir)

\* If proxy parameter exists then auto delete `server`

### `serveStatic`

Only if [`siteRoot`](site.md#siteroot) isn't a `/`.

Default: `{ route: ['/'], dir: 'dist' }`
