---
id: webpack-plugins-task-message
title: '@io-arc/webpack-plugins-task-message'
sidebar_label: webpack-plugins-task-message
slug: /plugins/modules/webpack-plugins-task-message.html
---

Task complete message for webpack plugin.

## Usage

```shell
$ npm i @io-arc/webpack-plugins-task-message
```

```typescript title="index.ts"
import TaskMessage from '@io-arc/webpack-plugins-task-message'

export default {
  // (abbreviation)
  plugins: [new TaskMessage('task name')]
}
```

## Methods

### `TaskMessage(task)`

**Return: (show log)**

Logs the status of the task when webpack finishes building, or an error occurs.

**Parameters**

| params | type     | default | description |
| ------ | -------- | ------- | ----------- |
| `task` | `string` | \-      | Task name   |
