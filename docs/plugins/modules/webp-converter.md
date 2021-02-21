---
id: webp-converter
title: '@io-arc/webp-converter'
sidebar_label: webp-converter
slug: /plugins/modules/webp-converter.html
---

PNG, JPG, GIF files to Webp files conversions.
What's [Webp](https://developers.google.com/speed/webp)?

Using to [imagemin](https://github.com/imagemin/imagemin).  
PNG, JPG is [imagemin-webp](https://github.com/imagemin/imagemin-webp).  
GIF is [imagemin-imagemin-gif2webp](https://github.com/imagemin/imagemin-gif2webp).

Using [RxJS](https://rxjs-dev.firebaseapp.com/) (library included).

## Usage

```shell
$ npm i -D @io-arc/webp-converter
```

```typescript title="index.ts"
import WebpConverter from '@io-arc/webp-converter'

const webp = new WebpConverter(['src', 'img'], {
  png: true,
  jpg: true,
  gif: false
})

webp.convertAll().subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

## Methods

### Instance parameters

| params       | type                                                                        | default                              | description                 |
| ------------ | --------------------------------------------------------------------------- | ------------------------------------ | --------------------------- |
| `targetDir`  | `string[]`                                                                  | \-                                   | Target directory name array |
| `ext`        | `{png: boolean, jpg: boolean, gif: boolean}`                                | `{png: true, jpg: true, gif: false}` | Target extensions           |
| `options`    | [`imageminWebp.Options`](https://github.com/imagemin/imagemin-webp#options) | `undefined`                          | PNG/JPG convert options     |
| `gifOptions` | [`IfGif2WebpOptions`](types.md#ifgif2webpoptions)                           | `undefined`                          | GIF convert options         |
| `outputDir`  | `string[]`                                                                  | Same as `targetDir` parameter        | Output directory name array |

directory name array is `/src/img` => `['src', 'img']`.

### `noTarget()`

**Return: `boolean`**

If target the extension to be converted is all `false`.

**Example**

```typescript
import WebpConverter from '@io-arc/webp-converter'

const webp = new WebpConverter(['src', 'img'], {
  png: false,
  jpg: false,
  gif: false
})

console.log(webp.noTareget)
// => true
```

### `targetDirectory()`

**Return: `string`**

Directory path where the extension to be converted exists.

**Example**

```typescript
import WebpConverter from '@io-arc/webp-converter'

const webp = new WebpConverter(['src', 'img'], {
  png: true,
  jpg: true,
  gif: false
})

console.log(webp.targetDirectory())
// => 'src/img'
```

### `regExp4FileExtensions()`

**Return: `RegExp`**

Regular expression for target extension.

**Example**

```typescript
import WebpConverter from '@io-arc/webp-converter'

const webp = new WebpConverter(['src', 'img'], {
  png: true,
  jpg: true,
  gif: false
})

console.log(webp.regExp4FileExtensions())
// => /^(?!_).*\.(png|jpg|jpeg)$/
```

### `convertAll()`

**Return: `RxJS.Observable<string>`**

Converts all target.  
Except for files that begin with an underscore.

**Example**

```typescript
import WebpConverter from '@io-arc/webp-converter'

const webp = new WebpConverter(['src', 'img'], {
  png: true,
  jpg: true,
  gif: false
})

webp.convertAll().subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

### `convert(filepath)`

**Return: `RxJS.Observable<string>`**

Convert the specified file.  
The `filepath` does not have to be the directory specified in the constructor.  
However, the output destination will be the directory specified in the constructor.

**Parameters**

| params     | type     | default | description                                |
| ---------- | -------- | ------- | ------------------------------------------ |
| `filepath` | `string` | \-      | The file path to which you want to convert |

**Example**

```typescript
import WebpConverter from '@io-arc/webp-converter'

const webp = new WebpConverter(['src', 'img'], {
  png: true,
  jpg: true,
  gif: false
})

webp.convert('src/data/foo.png').subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

### `removeAll()`

**Return: `RxJS.Observable<string>`**

Remove all `webp` files in the output directory specified by `outputDir`.

**Example**

```typescript
import WebpConverter from '@io-arc/webp-converter'

const webp = new WebpConverter(['src', 'img'], {
  png: true,
  jpg: true,
  gif: false
})

webp.removeAll().subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

### `remove(filepath)`

**Return: `RxJS.Observable<string>`**

Remove the specified file.  
The `filepath` does not have to be the directory specified in the constructor.

**Parameters**

| params     | type     | default | description                                |
| ---------- | -------- | ------- | ------------------------------------------ |
| `filepath` | `string` | \-      | The file path to which you want to convert |

**Example**

```typescript
import WebpConverter from '@io-arc/webp-converter'

const webp = new WebpConverter(['src', 'img'], {
  png: true,
  jpg: true,
  gif: false
})

webp.remove('src/data/foo.webp').subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```
