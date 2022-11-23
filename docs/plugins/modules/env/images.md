---
id: env-images
title: Images Build Constants
sidebar_label: Images
slug: images-constants.html
---

Constants related to images when using file-loader (webpack).

## `WS_IMG_PATH_ABSOLUTE`

**Config Key: `wsDir.img`**
**Return: `string`**

The absolute path to the `WS_ROOT` + `wsDir.img`.  
Same as `pwd` command.

## `OUTPUT_IMG_ARRAY`

**Config key: `deployDir.js`**  
**Return: `string[]`**  
**Default: `['common', 'img']`**

Array of output directory names.

## `DEPLOY_IMG_ARRAY`

**Config key: -**  
**Return: `string[]`**

An array of directory names obtained by adding `DIST` + `OUTPUT_IMG_ARRAY`.

## `WEBP_CONVERTER_CONFIG`

**Config key: `options.webp`**  
**Return: `IfWebpConverterConfig[]`(\*)**  
**Default: `[]`**

PNG, JPG, GIF files to Webp files convert.

\* Return Types

```typescript
interface IfWebpConverterConfig {
  // Target directories name array for image files used converter
  target: string[]
  // Target extensions
  ext: {
    png: boolean
    jpg: boolean
    gif: boolean
  }
  // Output directories name array
  output?: string[]
  // PNG or JPEG options
  options?: imageminWebp.Options
  // GIF options
  gifOptions?: {
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
  // Delete the webp file before starting the task.
  deleteBefore?: boolean
}
```

`imageminWebp.Options` is the see [imagemin-webp options](https://github.com/imagemin/imagemin-webp#options)

## `USE_IMAGEMIN`

**Config key: `options.imagemin`**  
**Return: `[string, object][] | undefined`**  
**Default: `undefined`**

Using imagemin plugins.
