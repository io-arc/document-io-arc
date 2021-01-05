---
id: env-site
title: Site Information Constants
sidebar_label: Site Information
slug: site-info-constants.html
---

Constants for the site information to be build.

### `SITE_DOMAIN`

**Config Key: `url`**  
**Return: `string`**  
**Default: `''`**

Website domain url.  
Site URL with no slash for last.

### `SITE_ROOT`

**Config Key: `siteRoot`**  
**Return: `string`**  
**Default: `'/'`**

Website root directory.  
Slash the front and back.

### `SITE_URL`

**Config Key: -**  
**Return: `string`**  
**Default: `''`**

The root URL of the website.  
Concatenates `SITE_DOMAIN` and `SITE_ROOT`.  
If `SITE_DOMAIN` is empty, `SITE_URL` will also be empty.

Also, the trailing slash of `SITE_ROOT` will be removed!

**example 1**

```yaml title="default.yml"
url: https://foo.com
siteRoot: /
```

```typescript
import { SITE_URL } from '@io-arc/env'

console.log(SITE_URL)
// -> https://foo.com
```

**example 2**

```yaml title="default.yml"
url: https://foo.com
siteRoot: /bar/
```

```typescript
import { SITE_URL } from '@io-arc/env'

console.log(SITE_URL)
// -> https://foo.com/bar
```

**example 3**

```yaml title="default.yml"
url: ''
siteRoot: /bar/
```

```typescript
import { SITE_URL } from '@io-arc/env'

console.log(SITE_URL)
// -> ''
```

### `SITE_TITLE`

**Config Key: `title`**  
**Return: `string`**  
**Default: `''`**

Website title.

### `SITE_AUTHOR`

**Config Key: `author`**  
**Return: `string`**  
**Default: `''`**

Website author.

### `SITE_DESCRIPTION`

**Config Key: `description`**  
**Return: `string`**  
**Default: `''`**

Website description
