---
id: types
title: '@io-arc/types'
sidebar_label: types
slug: /plugins/module-types.html
---

Boilerplate TypeScript global types.

## Usage

```shell
$ npm i @io-arc/types
```

```typescript title="index.ts"
import { TDirName } from '@io-arc/types'

const foo: TDirName = 'xxxx'
```

## Defines

| define         | type                                    | description                           |
| -------------- | --------------------------------------- | ------------------------------------- |
| `TDirName`     | `string`                                | Directory name with slash for last    |
| `TDirNameKey`  | `string`                                | Directory name with no slash for last |
| `TDirPathKey`  | `string`                                | Directory path with no slash for last |
| `TFileName`    | `string`                                | Filename with extension               |
| `TFileNameKey` | `string`                                | Filename with no extension            |
| `TFilePath`    | `string`                                | Full filepath with extension          |
| `TTaskName`    | `string`                                | Task name                             |
| `TGlobPattern` | `string`                                | Glob pattern                          |
| `TJsonString`  | `string`                                | Using `JSON.stringify`                |
| `TUrl`         | `string`                                | URL                                   |
| `TWebpackMode` | `none` \| `development` \| `production` | Webpack build mode                    |
