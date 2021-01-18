---
id: env-index
title: '@io-arc/env'
sidebar_label: Overview
slug: /plugins/modules/env/
---

A constant module that can be used for building and other processes.  
A module that allows other modules to easily call the information set in [node-config](https://github.com/lorenwest/node-config).

:::info
Also check the [Configuration Page](../../../configuration/index.md).
:::

## Usage

```shell
$ npm i @io-arc/env
```

```typescript title="index.ts"
import { NODE_ENV, NODE_MODE } from '@io-arc/env'

const build = NODE_ENV
// -> 'development'

const mode = MODE_ENV
// -> 'once'
```

## Constants

- [Common](common.md)
- [Site Settings](site.md)
- [HTML](html.md)
- [CSS](css.md)
- [JavaScript](js.md)
- [Images](images.md)
- [Static](static.md)
- [YAML2JSON](yaml2json.md)
