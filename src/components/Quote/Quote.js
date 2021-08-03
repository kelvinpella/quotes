import React from "react";
import styles from "./Quote.module.css";
const Quote = (props) => {
  return (
    <>
      <p className={styles.Quote}>{props.quote}</p>
      <p className={styles.Author}>- {props.author}</p>
    </>
  );
};

export default Quote;
