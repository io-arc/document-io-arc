import React from 'react'
import styles from './styles.module.scss'

export default function Version(props: { v: string }): JSX.Element {
  return (
    <div className={[styles.version].join(' ')} data-version={props.v}>
      v{props.v}〜
    </div>
  )
}
