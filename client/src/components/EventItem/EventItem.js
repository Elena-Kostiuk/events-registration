import React, { useState } from "react";
import styles from "./EventItem.module.css";

export default function EventItem(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const btnHandler = (e) => {
    if (e.target.innerText === "Register") {
      props.btnRegistration(props.info.id);
    } else {
      props.btnView(props.info.id);
    }
  };

  const toggleTextHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles["event-card"]}>
      <h3>{props.info.title}</h3>
      <p className={`${styles.description} ${isExpanded ? styles.hidden : ""}`}>
        {props.info.discription}
      </p>
      {!isExpanded && (
        <button className={styles.more} onClick={toggleTextHandler}>
          more
        </button>
      )}
      <div className={styles["btn-block"]}>
        <button onClick={btnHandler}>Register</button>
        <button onClick={btnHandler}>View</button>
      </div>
    </div>
  );
}
