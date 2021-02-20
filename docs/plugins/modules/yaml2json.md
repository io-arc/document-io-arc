---
id: yaml2json
title: '@io-arc/yaml2json'
sidebar_label: yaml2json
slug: /plugins/module-yaml2json.html
---

YAML to JSON conversion.  
Using [RxJS](https://rxjs-dev.firebaseapp.com/) (library included).

## Usage

```shell
$ npm i @io-arc/yaml2json
```

```typescript title="index.ts"
import Yaml2Json from '@io-arc/yaml2josn'

const y2j = new Yaml2Json(['src', 'yaml'], ['dist', 'data'])
y2j.convertAll(false).subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

## Methods

### Instance parameters

| params   | type       | default | description                 |
| -------- | ---------- | ------- | --------------------------- |
| `target` | `string[]` | \-      | Target directory name array |
| `output` | `string[]` | \-      | Output directory name array |

directory name array is `/src/yaml` => `['src', 'yaml']`.

### `convertAll(isMinify)`

**Return: `RxJS.Observable<string>`**

Converts all YAMLs in a directory.  
Except for files that begin with an underscore.

**Parameters**

| params     | type      | default | description              |
| ---------- | --------- | ------- | ------------------------ |
| `isMinify` | `boolean` | \-      | Minify during conversion |

**Example**

```typescript
import Yaml2Json from '@io-arc/yaml2josn'

const y2j = new Yaml2Json(['src', 'yaml'], ['dist', 'data'])
y2j.convertAll(false).subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

### `convert(filepath, isMinify)`

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
import Yaml2Json from '@io-arc/yaml2josn'

const y2j = new Yaml2Json(['src', 'yaml'], ['dist'])
y2j.convert('src/foo.yml', false).subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

### `removeAll(target)`

**Return: `RxJS.Observable<string>`**

If `target` is not specified, the output directory specified by a constructor.  
If you want to specify a location different from the destination, use the Glob pattern.  
(e.g. `foo/bar/**/*.json`)

If `target` is `undefined`, all JSON in the output directory specified in the constructor will be deleted.

**Parameters**

| params              | type   | default     | description                          |
| ------------------- | ------ | ----------- | ------------------------------------ |
| `target` (optional) | `Glob` | `undefined` | Specify by file path or Glob pattern |

**Example**

```typescript
import Yaml2Json from '@io-arc/yaml2josn'

// remove 'dist/**/*.json'
const y2j = new Yaml2Json(['src', 'yaml'], ['dist'])
y2j.removeAll().subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)

// remove 'dist/data/**/*.json'
const y2j2 = new Yaml2Json(['src', 'yaml'], ['dist'])
y2j2.removeAll('dist/data/**/*.json').subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

### `remove(filepath)`

**Return: `RxJS.Observable<string>`**

Remove the specified file.  
The `filepath` does not have to be the directory specified in the constructor.  
However, the output destination will be the directory specified in the constructor.

**Parameters**

| params     | type     | default | description                                |
| ---------- | -------- | ------- | ------------------------------------------ |
| `filepath` | `string` | \-      | The file path to which you want to convert |

**Example**

```typescript
import Yaml2Json from '@io-arc/yaml2josn'

const y2j = new Yaml2Json(['src', 'yaml'], ['dist'])
y2j.remove('dist/data/foo.json', false).subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```
