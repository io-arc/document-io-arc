---
id: yaml2json
title: '@io-arc/task-yaml2json'
sidebar_label: yaml2json
slug: /plugins/task-yaml2json.html
---

YAML to JSON conversion.

## Usage

```shell
$ npm i -D @io-arc/task-yaml2json

# once run
$ NODE_ENV=development MODE_ENV=once ia-yaml2json

# watch run
$ NODE_ENV=development MODE_ENV=watch ia-yaml2json
```

Or

```json title="package.json"
{
  "scripts": {
    "yaml2json": "ia-yaml2json"
  }
}
```

```shell
$ npm run yaml2json
```

## Configuration

Converts the YAML file in the working space to a JSON file and outputs it.

**Working Directory**: [wsDir.yaml2json](../../configuration/build.md#wsdiryaml2json) (Default: `src/yaml2json`)  
**Output Directory**: [outputDir](../../configuration/build.md#outputdir)/[deployDir.json](../../configuration/build.md#deploydirjson) (Default: `dist/common/data`)  
**Minify**: [options.json.minify](../../configuration/build.md#optionsjsonminify) (Default: `false`)
