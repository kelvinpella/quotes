import React from "react";
import styles from "./Icons.module.css";
const Icons = (props) => {
  return (
    <div className={styles.IconContainer}>
      <a
        href="https://twitter.com/intent/tweet"
        target="_blank"
        rel="noreferrer"
        className={styles.TwitterContainer}
      >
        <img src="https://cutt.ly/LQkkG8t" alt="Twitter logo" />
      </a>
      <a
        href="https://www.tumblr.com/"
        target="_blank"
        rel="noreferrer"
        className={styles.TumblrContainer}
      >
        <img src="https://cutt.ly/8QkHvyL" alt="Tumblr logo" />
      </a>
    </div>
  );
};

export default Icons;
