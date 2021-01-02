---
id: overview
title: Configuration
sidebar_label: Overview
slug: /configuration/
---

configuration Bundle Default Build Internally, the build can be tweaked using the [node-config](https://github.com/lorenwest/node-config) library.  
The file should be placed as `config/xxx.yml(or .json, or .js etc.)`.

This CLI defines the file as follows.

## Site configure files

- default.yml
- development.yml (`NODE_ENV=development`)
- production.yml (`NODE_ENV=production`)

## Build configure files

- local.yml
- local-development.yml (`NODE_ENV=development`)
- local-production.yml (`NODE_ENV=production`)

## More other configuration

- [BrowserSync](../plugins/tasks/browser-sync.md#configure-file)

:::tip
The values you set can be used in Babel, TypeScript, and Pug.  
See each task for how to use it.
:::
