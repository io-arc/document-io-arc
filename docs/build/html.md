---
id: html
title: HTML template engine build
sidebar_label: HTML
---

import Tags from '../../components/Tags'

## Constants

<Tags presets={['html']} />

The values set in [Site Setting](../configuration/site.md) and [Build Settings](../configuration/build.md) can be used in the template engine.

| constants          | description                                            | [node-config](https://github.com/lorenwest/node-config) key |
| ------------------ | ------------------------------------------------------ | ----------------------------------------------------------- |
| `IS_PRODUCTION`    | Whether the build mode is `NODE_ENV=production` or not | \-                                                          |
| `SITE_TITLE`       | Site title                                             | `title`                                                     |
| `SITE_URL`         | Site URL                                               | `url`                                                       |
| `SITE_AUTHOR`      | Site author                                            | `author`                                                    |
| `SITE_DESCRIPTION` | Site description                                       | `description`                                               |
| `SITE_ROOT`        | Site root path (e.g. `/`)                              | `siteRoot`                                                  |
| `CSS_DIR`          | CSS directory path (e.g. `/common/css`)                | `deployDir.css`                                             |
| `IMG_DIR`          | Image directory path (e.g. `/common/img`)              | `deployDir.img`                                             |
| `JS_DIR`           | JavaScript directory path (e.g. `/common/js`)          | `deployDir.js`                                              |
| `JSON_DIR`         | JSON directory path (e.g. `/common/data`)              | `deployDir.json`                                            |

## Functions extended

A function that is not the default function provided by the template engine, but is a proprietary extension.

### `readYAML(path: string): object`

<Tags keys={['pug']} />

Transform the YAML file placed in Pug's workspace in JSON format.  
e.g. `- var foo = readYAML('assets/data/foo.yml')`

### PHP filter

<Tags keys={['pug']} />

`<?php ... ?>` can be inserted.

```pug
div
  :php
    echo '1';
```

Result below.

```php
<div><?php echo '1'; ?></div>
```
