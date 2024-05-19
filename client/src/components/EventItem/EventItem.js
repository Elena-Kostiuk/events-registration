import React from 'react';
import styles from './EventItem.module.css';

export default function EventItem (props) {
  const btnHandler = e => {
    if (e.target.innerText === 'Register') {
      props.btnRegistration(props.info.id);
    } else {
      props.btnView(props.info.id);
    }
  };
  return (
    <div className={styles['event-card']}>
      <h3>{props.info.title}</h3>
      <p>{props.info.discription}</p>
      <div className={styles['btn-block']}>
        <button className={styles.btn} onClick={btnHandler}>
          Register
        </button>
        <button className={styles.btn} onClick={btnHandler}>
          View
        </button>
      </div>
    </div>
  );
}
