---
id: webp-converter
title: '@io-arc/task-webp-converter'
sidebar_label: webp-converter
slug: /plugins/task-webp-converter.html
---

PNG, JPG, GIF files to Webp files conversions.  
Using [@io-arc/webp-converter](../modules/webp-converter.md)

## Usage

```shell
$ npm i -D @io-arc/task-webp-converter

# once run# once run
$ NODE_ENV=development MODE_ENV=once ia-webp

# watch run
$ NODE_ENV=development MODE_ENV=watch ia-webp
```

Or

```json title="package.json"
{
  "scripts": {
    "webp": "ia-webp"
  }
}
```

```shell
$ npm run webp
```

## Configuration

The configuration is written in `config/(default|local).yml`.  
Multiple targets can be specified.

```yaml title="local.yml"
options:
  webp:
    - target: [src, img]
      ext:
        png: true
        jpg: true
        gif: false
      options:
        quality: 70
      gifOptions:
        lossy: true
      deleteBefore: true
    - target: [src, static]
      ext:
        png: true
        jpg: true
        gif: true
      output: [dist, common, img]
      deleteBefore: false
```

Only `target` are required.

### `target`

<span style={{fontWeight:'bold',color:'#fe6868'}}>Required.</span><br/>
Target directories name array for image files used converter.

### `ext`

Target extensions.

```typescript title="Default"
{
  png: true,
  jpg: true,
  gif: false
}
```

### `options`

Convert options for PNG and JPG.  
**Default:** See the [imagemin-webp options](https://github.com/imagemin/imagemin-webp#options).

### `gifOptions`

Convert options for GIF.  
**Default:** See the [imagemin-gif2webp options](https://github.com/imagemin/imagemin-gif2webp#options).

### `output`

Output directories name array.  
**Default** same as **`target`**.

### `deleteBefore`

Delete the webp file before starting the task.  
**Default: `true`**
