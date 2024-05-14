import React from 'react';
import styles from './EventItem.module.css';

export default function EventItem (props) {
  const btnHandler = () => {
    props.btnHandler(props.info.id);
  };
  return (
    <div className={styles['event-card']}>
      <h2>{props.info.title}</h2>
      <p>{props.info.discription}</p>
      <div className={styles['btn-block']}>
        <button className={styles.btn} onClick={btnHandler}>
          Register
        </button>
        <button className={styles.btn}>View</button>
      </div>
    </div>
  );
}
