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
