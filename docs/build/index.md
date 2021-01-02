---
id: overview
title: Overview
sidebar_label: Overview
slug: /build/
---

A build task that can be used regardless of the CLI answer.  
`$ npm run XXX` is a script that is initially set in `package.json#scripts`.

In all cases, files with underscores at the beginning are excluded from the build.

## Getting started

```shell
# Watch build
$ npm run start

# Once build for NODE_ENV=development
$ npm run build

# Once build for NODE_ENV=production
$ npm run release
```

These commands include the following builds.

- Clean to output & stats directory (exc. Watch build)
- HTML/CSS/JS (using webpack)
- Copy for static files
- Create a manifest.json
- Create a Service Worker
- YAML to JSON conversion

## Use a `BrowserSync`

Used local server is [BrowserSync](https://browsersync.io/).

```shell
$ npm run server
```

[See plugins document](../plugins/tasks/browser-sync.md).

## Build directory clean

Delete the contents of the output and stats directory.

```shell
$ npm run clean
```

## File Copy

```shell
$ npm run b:copy
```

[See plugins document](../plugins/tasks/copy.md).

## Create a `manifest.json`

```shell
$ npm run b:manifest
```

[See plugins document](../plugins/tasks/manifest.md).

## YAML to JSON conversion

```shell
$ npm run b:yaml2json
```

[See plugins document](../plugins/tasks/yaml2json.md).

## HTML/CSS/JS

```shell
$ npm run b:webpack
```
