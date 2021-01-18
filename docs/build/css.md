---
id: css
title: CSS language build
sidebar_label: CSS
slug: css.html
---

import Tags from '../../components/Tags'

## Auto insert Bender Prefix

<Tags presets={['css']} />

Using [autoprefixer](https://autoprefixer.github.io/).  
You can use [browserslist](https://github.com/ai/browserslist) to specify.

## Using `node_modules` file

<Tags presets={['css']} />

The first path `~` will be `node_modules`.

```stylus
@require "~bootstrap/dist/css/bootstrap-reboot.min.css"
```
