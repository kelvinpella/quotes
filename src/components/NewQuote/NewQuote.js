import React from "react";
import styles from "./NewQuote.module.css";
const NewQuote = React.forwardRef((props, ref) => (
  <button className={styles.NewQuote}>New Quote</button>
));
export default NewQuote;
