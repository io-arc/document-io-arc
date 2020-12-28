import React from 'react'
import styles from './styles.module.scss'

const item = {
  common: 'common',
  html: 'html',
  pug: 'pug'
} as const
type item = typeof item[keyof typeof item]

interface IfProps {
  keys: item[]
}

const tagClass = (item: item): string => {
  switch (item) {
    case 'common':
      return styles.tagsItemCommon
    default:
      return ''
  }
}

const display = (item: item): string => {
  switch (item) {
    case 'common':
      return 'common'
    case 'html':
      return 'HTML'
    case 'pug':
      return 'pug'
    default:
      return ''
  }
}

export default function Tags(props: IfProps): JSX.Element {
  const { keys } = props

  if (keys.length === 0) return

  return (
    <ul className={styles.tags}>
      {keys.map((key: item) => (
        <li key={key} className={[styles.tagsItem, tagClass(key)].join(' ')}>
          {display(key)}
        </li>
      ))}
    </ul>
  )
}
