import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";

const Quote = (props) => {
  return (
    <>
      <p>{props.quote}</p>
      <p>{props.author}</p>
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
        setQuotes(response.data.slice(0, 2));
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
        <div>Twitter</div>
        <div>Tumblir</div>
      </div>
      <p>by hezag</p>
    </>
  );
}

export default App;
