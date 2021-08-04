import React from "react";
import styles from "./Icons.module.css";
import twitterLogo from "../../assets/twitter.png";
import tumblrLogo from "../../assets/tumblr.png";
const Icons = (props) => {
  return (
    <div className={styles.IconContainer}>
      <a
        href="https://twitter.com/intent/tweet"
        target="_blank"
        rel="noreferrer"
        className={styles.TwitterContainer}
      >
        <img src={twitterLogo} alt="Twitter logo" />
      </a>
      <a
        href="https://www.tumblr.com/"
        target="_blank"
        rel="noreferrer"
        className={styles.TumblrContainer}
      >
        <img src={tumblrLogo} alt="Tumblr logo" />
      </a>
    </div>
  );
};

export default Icons;
