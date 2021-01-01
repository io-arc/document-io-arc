---
id: other
title: Other build
sidebar_label: (TODO) Other
---

A build task that can be used regardless of the CLI answer.

## Use a `BrowserSync`

Used local server is [BrowserSync](https://browsersync.io/).

```shell
$ npm run server
```

[Here are the options](../plugins/tasks.md#browser-sync) if you have already set up an SPA or PHP server, etc.

## Build directory clean

WIP

## File Copy

If you put a file in the directory set in [Build Settings#wsDir.static](../configuration/build.md#wsdirstatic), it will be copied as is.  
On the other hand, if you delete or rename a file, the old file will be deleted from the output directory.

## YAML to JSON transform

WIP

## Create a `manifest.json`

WIP
