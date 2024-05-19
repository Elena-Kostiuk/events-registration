import React from 'react'
import styles from './ParticipantsItem.module.css'

export default function ParticipantsItem(props) {
  return (
    <div className={styles['participant-box']}>
        <h3>{props.info.name}</h3>
        <p>{props.info.email}</p>
    </div>
  )
}
