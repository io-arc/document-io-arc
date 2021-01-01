---
id: other
title: Other build
sidebar_label: Other
---

A build task that can be used regardless of the CLI answer.  
`$ npm run XXX` is a script that is initially set in `package.json#scripts`.

## Use a `BrowserSync`

Used local server is [BrowserSync](https://browsersync.io/).

```shell
$ npm run server
```

[Here are the options](../plugins/tasks.md#browser-sync) if you have already set up an SPA or PHP server, etc.

## Build directory clean

Delete the contents of the output and stats directory.

```shell
$ npm run clean
```

## File Copy

```shell
$ npm run b:copy
```

[See plugins document](../plugins/tasks.md#copy).

## Create a `manifest.json`

```shell
$ npm run b:manifest
```

[See plugins document](../plugins/tasks.md#manifest).

## YAML to JSON conversion

```shell
$ npm run b:yaml2json
```

[See plugins document](../plugins/tasks.md#yaml2json).
