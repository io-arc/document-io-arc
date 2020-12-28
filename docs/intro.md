---
id: intro
title: Introduction
slug: /
---

It's so easy! build in 5 minutes! WEB/PWA/SPA boilerplate CLI.

## Install

```shell
# npm
$ npm i -g @io-arc/cli

# yarn
$ yarn global add @io-arc/cli
```

## Usage

```shell
$ mkdir <project>
$ cd <project>
$ io-arc
```

All you have to do is answered the choices that come up.

## CLI options

```shell
# check version
$ io-arc -V
```

## Create directory structure

```text
<Project>
    ├ config/ (settings)
    │    ├ default.yml (site settings)
    │    ├ development.yml
    │    ├ production.yml
    │    ├ local.yml (build settings)
    │    ├ local-development.yml
    │    ├ local-production.yml
    │    └ webpack.extend.js
    ├ config-vue/ (select Vue only)
    │    └ .pug-lintrc.json
    ├ src/ (working directory)
    │    ├ css/
    │    ├ html/
    │    ├ img/ (using file-loader)
    │    ├ js/
    │    ├ static/ (file copy)
    │    └ yaml2json/
    ├ types/ (select TypeScript only)
    ├ .babelrc (select Babel only)
    ├ .browserslistrc
    ├ .editorconfig
    ├ .eslintrc.yml
    ├ .pug-lintrc.json (select Pug only)
    ├ .gitignore
    ├ .npmrc
    ├ .prettierrc
    ├ tsconfig.json (select TypeScript only)
    ├ package.json
    └ webpack.config.js
```
