---
id: yaml2json
title: '@io-arc/yaml2json'
sidebar_label: (TODO) yaml2json
slug: /plugins/module-yaml2json.html
---

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
