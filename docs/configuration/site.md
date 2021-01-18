---
id: site
title: Site Settings
slug: site.html
---

Settings related to the website, such as the site title, are specified in the `default.yml` or `development.yml` or `production.yml`.  
The initial value is set to the information you answered in the CLI dialog.

```yaml title="example (default.yml)"
title: Hello!
url: https://arc-one.jp
author: arc one
description: Web boilerplate
siteRoot: /
```

## title

Website title.  
Used for `<title>`, etc.

## url

Website url.  
Used for `<meeta property="og:url">`, `<link rel="canonical">`, etc.

Site URL with no slash for last.

✅ `https://arc-one.jp`  
❌ `https://arc-one.jp/`

## author

Website author.  
Used for `<meta name="author">`, etc.

## description

Website description.  
Used for `<meta name="description">`, `<meta property="og:description">`, etc.

## siteRoot

Website root path.  
Used for root relative path, etc.

Slash the front and back.

✅ `/foo/`  
❌ `/foo`
