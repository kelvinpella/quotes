import React from "react";
import styles from "./NewQuote.module.css";
const NewQuote = (props) => (
  <button className={styles.NewQuote} onClick={props.loadNewQuote}>
    New Quote
  </button>
);
export default NewQuote;
