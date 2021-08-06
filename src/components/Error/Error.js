import React from "react";
import styles from "./Error.module.css";
const Error = (props) => {
  return (
    <div className={styles.Error}>
      <h2 className={styles.Header}>Ooops!! Can't load quotes!</h2>
      <p className={styles.Message}>{props.error}</p>
    </div>
  );
};

export default Error;
