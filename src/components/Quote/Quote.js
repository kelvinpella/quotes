import React from "react";
import styles from "./Quote.module.css";
const Quote = (props) => {
  let author = props.author;
  if (!author) {
    author = "Unknown";
  }
  return (
    <>
      <p className={styles.Quote}>{props.quote}</p>
      <p className={styles.Author}>- {author}</p>
    </>
  );
};

export default Quote;
