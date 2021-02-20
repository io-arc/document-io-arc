---
id: overview
title: Plugins
sidebar_label: Overview
slug: /plugins/
---

import Tags from '../../components/Tags'

**"io arc"** has two types of plug-ins: tasks and modules.  
For web development, the task plugin is used to build.

Developers can also create modules, or use existing modules to create new tasks.

## Tasks

Task libraries for building and other tasks used in the project.

| Package                                                                | Tags                                                                   | Description                                 |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------- |
| [@io-arc/task-browser-sync](tasks/browser-sync.md)                     | <Tags keys={['server']} />                                             | Start the local server (using browser-sync) |
| [@io-arc/task-clean](tasks/clean.md)                                   |                                                                        | Delete the contents                         |
| [@io-arc/task-copy](tasks/copy.md)                                     |                                                                        | Copy files                                  |
| [@io-arc/task-manifest](tasks/manifest.md)                             | <Tags keys={['pwa']} />                                                | Generate manifest.json                      |
| [@io-arc/task-service-worker](tasks/manifest.md)                       | <Tags keys={['pwa']} />                                                | Create a Service Worker                     |
| [@io-arc/task-webp-converter](tasks/webp-converter.md)                 | <Tags keys={['img', 'converter']} />                                   | PNG/JPG/GIF to Webp convert                 |
| [@io-arc/task-webpack-babel](tasks/webpack-babel.md)                   | <Tags keys={['js', 'babel', 'img', 'webpack']} />                      | Babel transpile for webpack                 |
| [@io-arc/task-webpack-css](tasks/webpack-css.md)                       | <Tags keys={['css', 'img', 'webpack']} />                              | CSS compile for webpack                     |
| [@io-arc/task-webpack-html](tasks/webpack-html.md)                     | <Tags keys={['html', 'img', 'webpack']} />                             | HTML (with handlebars) compile for webpack  |
| [@io-arc/task-webpack-pug](tasks/webpack-pug.md)                       | <Tags keys={['html', 'pug', 'img', 'webpack']} />                      | Pug compile for webpack                     |
| [@io-arc/task-webpack-sass](tasks/webpack-sass.md)                     | <Tags keys={['css', 'sass', 'img', 'webpack']} />                      | Sass compile for webpack                    |
| [@io-arc/task-webpack-stylus](tasks/webpack-stylus.md)                 | <Tags keys={['css', 'stylus', 'img', 'webpack']} />                    | Stylus compile for webpack                  |
| [@io-arc/task-webpack-typescript](tasks/webpack-typescript.md)         | <Tags keys={['js', 'typescript', 'img', 'webpack']} />                 | TypeScript compile for webpack              |
| [@io-arc/task-webpack-vue](tasks/webpack-vue.md)                       | <Tags keys={['js', 'babel', 'vue', 'img', 'webpack']} />               | Vue (Babel) build for webpack               |
| [@io-arc/task-webpack-vue-typescript](tasks/webpack-vue-typescript.md) | <Tags keys={['js', 'babel', 'typescript', 'vue', 'img', 'webpack']} /> | Vue (TypeScript) build for webpack          |
| [@io-arc/task-yaml2json](tasks/yaml2json.md)                           | <Tags keys={['yaml', 'converter']} />                                  | YAML files to JSON files convert            |

## Modules

Libraries supporting the build task

| Package                                                                         | Tags                                         | Description                                                      |
| ------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------- |
| [@io-arc/env](modules/env)                                                      |                                              | A constant that can be used for building and other processes     |
| [@io-arc/file-list](modules/file-list.md)                                       |                                              | Get the file list                                                |
| [@io-arc/logger](modules/logger.md)                                             |                                              | Logging output to console                                        |
| [@io-arc/output-dir-diff](modules/output-dir-diff.md)                           |                                              | Obtain the difference from the directory position to be compared |
| [@io-arc/path-build](modules/path-build.md)                                     |                                              | Convert an array of directory names to paths                     |
| [@io-arc/read-yaml](modules/read-yaml.md)                                       |                                              | YAML files to JSON files                                         |
| [@io-arc/types](modules/types.md)                                               | <Tags keys={['typescript']} />               | TypeScript types                                                 |
| [@io-arc/utils](modules/utils.md)                                               |                                              | Utility functions                                                |
| [@io-arc/webp-converter](modules/webp-converter.md)                             | <Tags keys={['img', 'converter']} />         | PNG/JPG/GIF to Webp converter                                    |
| [@io-arc/webpack-loaders-image](modules/webpack-loaders-image.md)               | <Tags keys={['img', 'webpack']} />           | Images operation with webpack                                    |
| [@io-arc/webpack-loaders-js](modules/webpack-loaders-js.md)                     | <Tags presets={['js']} keys={['webpack']} /> | JavaScript operation with webpack                                |
| [@io-arc/webpack-loaders-pug-linter](modules/webpack-loaders-pug-linter.md)     | <Tags keys={['pug', 'webpack']} />           | Pug lint with webpack                                            |
| [@io-arc/webpack-plugins-task-message](modules/webpack-plugins-task-message.md) | <Tags keys={['webpack']} />                  | Task message log with webpack                                    |
| [@io-arc/webpack-settings](modules/webpack-settings.md)                         | <Tags keys={['webpack']} />                  | Webpack settings                                                 |
| [@io-arc/yaml2json](modules/yaml2json.md)                                       | <Tags keys={['yaml', 'converter']} />        | YAML files to JSON files converter                               |
