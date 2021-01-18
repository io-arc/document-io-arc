---
id: env-yaml2json
title: YAML2JSON Build Constants
sidebar_label: YAML2JSON
slug: yaml2json-constants.html
---

## `WS_YAML2JSON_ARRAY`

**Config Key: `wsDir.yaml2json`**  
**Return: `string[]`**  
**Default: `[WS_ROOT, 'yaml2json']`**

\* The `WS_ROOT` constant cannot be changed.

Array of working space directory names.

## `WS_YAML2JSON_PATH`

**Config Key: -**  
**Return: `string`**

`WS_YARML2JSON_ARRAY` converted to a path.

## `JSON_MINIFY`

**Config key: `options.json.minify`**  
**Return: `boolean`**  
**Default: `false`**

Minify of build files.

## `OUTPUT_JSON_ARRAY`

**Config key: `deployDir.json`**  
**Return: `string[]`**  
**Default: `['common', 'data']`**

Array of output directory names.

## `DEPLOY_YAML2JSON_ARRAY`

**Config key: -**  
**Return: `string[]`**

An array of directory names obtained by adding `DIST` + `OUTPUT_JSON_ARRAY`.
