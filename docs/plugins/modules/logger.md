---
id: logger
title: '@io-arc/logger'
sidebar_label: logger
slug: /plugins/module-logger.html
---

Logging output to Terminal console.  
Use [Kleur][kleur] to specify colors.  
[Kleur][kleur] is also bundled, so no installation is required.

## Usage

```shell
$ npm i @io-arc/logger
```

```typescript title="index.ts"
import { blue } from 'kleur'
import Logger from '@io-arc/logger'

Logger.message('Success !!!!', blue)
```

## Methods

No `New` instance.  
This class is static function.

### `Logger.message(message[, color])`

**Return: `void`**

General purpose log.

**Parameters**

| params             | type                   | default       | description |
| ------------------ | ---------------------- | ------------- | ----------- |
| `message`          | `string`               | \-            | Log message |
| `color` (optional) | [`Kleur Color`][kleur] | `Kluer.reset` | Log color   |

### `Logger.start(task[, isBr])`

**Return: `void`**

Task stated log.  
message color is blue.

**Parameters**

| params            | type      | default | description                  |
| ----------------- | --------- | ------- | ---------------------------- |
| `task`            | `string`  | \-      | Started task name            |
| `isBr` (optional) | `boolean` | `false` | Create a new line at the top |

### `Logger.completed(task[, isBr])`

**Return: `void`**

Task completed log.  
message color is green.

**Parameters**

| params            | type      | default | description                  |
| ----------------- | --------- | ------- | ---------------------------- |
| `task`            | `string`  | \-      | Completed task name          |
| `isBr` (optional) | `boolean` | `false` | Create a new line at the top |

### `Logger.failed(task, error[, isNotify])`

**Return: `void`**

Task error log.  
message color is red.

**Parameters**

| params                | type                          | default | description                                                      |
| --------------------- | ----------------------------- | ------- | ---------------------------------------------------------------- |
| `task`                | `string`                      | \-      | Error task name                                                  |
| `error`               | `Error` \| `string` \| `null` | \-      | Error message                                                    |
| `isNotify` (optional) | `boolean`                     | `true`  | Using [node-notifier](https://github.com/mikaelbr/node-notifier) |

[kleur]: https://github.com/lukeed/kleur
