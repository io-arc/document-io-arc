import React from 'react'
import styles from './styles.module.scss'

const lang = {
  html: 'html',
  css: 'css',
  js: 'js'
} as const
type lang = typeof lang[keyof typeof lang]

const items = {
  all: 'all',
  html: 'html',
  pug: 'pug',
  css: 'css',
  sass: 'sass',
  stylus: 'stylus',
  babel: 'babel',
  typescript: 'typescript',
  vue: 'vue',
  yaml: 'yaml',
  js: 'js',
  converter: 'converter',
  server: 'server',
  pwa: 'pwa',
  img: 'img',
  webpack: 'webpack'
} as const
type items = typeof items[keyof typeof items]

interface IfProps {
  keys?: items[]
  presets?: lang[]
}

const tagClass = (item: items): string => {
  switch (item) {
    case items.all:
      return styles.tagsItemAll
    case items.html:
      return styles.tagsItemHtml
    case items.pug:
      return styles.tagsItemPug
    case items.css:
      return styles.tagsItemCss
    case items.sass:
      return styles.tagsItemSass
    case items.stylus:
      return styles.tagsItemStylus
    case items.babel:
      return styles.tagsItemBabel
    case items.typescript:
      return styles.tagsItemTs
    case items.vue:
      return styles.tagsItemVue
    case items.yaml:
      return styles.tagsItemYaml
    case items.js:
      return styles.tagsItemJs
    case items.pwa:
      return styles.tagsItemPwa
    case items.webpack:
      return styles.tagsItemWebpack
    default:
      return ''
  }
}

const display = (item: items): string => {
  switch (item) {
    case items.all:
      return 'ALL'
    case items.html:
      return 'HTML'
    case items.pug:
      return 'Pug'
    case items.css:
      return 'CSS'
    case items.sass:
      return 'SASS/SCSS'
    case items.stylus:
      return 'Stylus'
    case items.babel:
      return 'Babel'
    case items.typescript:
      return 'TypeScript'
    case items.vue:
      return 'Vue'
    case items.yaml:
      return 'YAML2JSON'
    case items.js:
      return 'JavaScript'
    case items.converter:
      return 'Converter'
    case items.server:
      return 'Server'
    case items.pwa:
      return 'PWA'
    case items.img:
      return 'Image'
    case items.webpack:
      return 'webpack'
    default:
      return item
  }
}

const allLanguage = (target: lang): items[] => {
  switch (target) {
    case lang.html:
      return [items.html, items.pug]
    case lang.css:
      return [items.css, items.sass, items.stylus]
    case lang.js:
      return [items.babel, items.typescript, items.vue]
    default:
      return []
  }
}

const createKeys = (props: IfProps): items[] => {
  const { keys, presets } = props

  const res = []

  if (presets != null && presets.length > 0) {
    presets.forEach((preset: lang) => {
      const assets = allLanguage(preset)
      res.push(...assets)
    })
  }

  if (keys != null) res.push(...keys)

  return res
}

export default function Tags(props: IfProps): JSX.Element {
  const keys = createKeys(props)

  if (keys.length === 0) return <span />

  return (
    <ul className={styles.tags}>
      {keys.map((key: items) => (
        <li key={key} className={[styles.tagsItem, tagClass(key)].join(' ')}>
          {display(key)}
        </li>
      ))}
    </ul>
  )
}
