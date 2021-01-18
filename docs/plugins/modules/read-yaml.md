---
id: read-yaml
title: '@io-arc/read-yaml'
sidebar_label: read-yaml
slug: /plugins/module-read-yaml.html
---

Transpile YAML to JSON.  
Using to [js-yaml](https://github.com/nodeca/js-yaml).

## Usage

```shell
$ npm i @io-arc/read-yaml
```

```typescript title="index.ts"
import ReadYaml from '@io-arc/read-yaml'

const json = ReadYaml('foo', ['data'])
// -> read to data/foo.yml
```

## Functions

### `ReadYaml(filename, dir)`

**Return: `JSON`**

**Parameters**

| params     | type       | default | description          |
| ---------- | ---------- | ------- | -------------------- |
| `filename` | `string`   | \-      | Read YAML filename   |
| `dir`      | `string[]` | \-      | Directory name array |
