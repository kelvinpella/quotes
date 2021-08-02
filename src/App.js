import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";

const Quote = (props) => {
  return (
    <>
      <p className={styles.Quote}>{props.quote}</p>
      <p className={styles.Author}>- {props.author}</p>
    </>
  );
};

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        setQuotes(response.data.slice(0, 1));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  let quote = "";
  if (loading) {
    quote = "Loading quotes...";
  }
  if (quotes.length) {
    quote = quotes.map((quote, index) => {
      return <Quote key={index} quote={quote.text} author={quote.author} />;
    });
  }
  return (
    <>
      <div className={styles.Quote_box}>
        {quote}
        {/* <p className={styles.Quote}>
          Imagine we have an app ( let's call it JB). Our phones have JB
          installed.
        </p>
        <p className={styles.Author}>- Kelvin Pella</p> */}
        <div className={styles.IconContainer}>
          <div className={styles.TwitterContainer}>
            <img src="https://cutt.ly/LQkkG8t" alt="Twitter logo" />
          </div>
          <div className={styles.TumblrContainer}>
            <img src="https://cutt.ly/8QkHvyL" alt="Tumblr logo" />
          </div>
        </div>
        <button className={styles.NewQuote}>New Quote</button>
      </div>
      <p className={styles.Hezag}>by hezag</p>
    </>
  );
}

export default App;
