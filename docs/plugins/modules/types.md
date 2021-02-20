---
id: types
title: '@io-arc/types'
sidebar_label: types
slug: /plugins/modules/types.html
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

## Type

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

## Interface

### `IfGif2WebpOptions`

Gif to webp convert options.  
See options of [imagemin-gif2webp](https://github.com/imagemin/imagemin-gif2webp).

```typescript
interface IfGif2WebpOptions {
  lossy?: boolean
  mixed?: boolean
  quality?: number
  method?: number
  minimize?: boolean
  kmin?: number
  kmax?: number
  filter?: number
  metadata?: string
  multiThreading?: boolean
  buffer?: Buffer
}
```

### `IfWebpConverterConfig`

Webp convert configure.

```typescript
interface IfWebpConverterConfig {
  // Target directories name array for image files used converter
  target: TDirNameKey[]
  ext: {
    png: boolean
    jpg: boolean
    gif: boolean
  }
  // Output directories name array
  output?: TDirNameKey[]
  options?: imageminWebp.Options
  gifOptions?: IfGif2WebpOptions
  // Delete the webp file before starting the task.
  deleteBefore?: boolean
}
```

`imageminWebp.Options` is "PNG/JPEG" webp convert options.  
See options of [imagemin-webp](https://github.com/imagemin/imagemin-webp).
