import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Icons from "./components/Icons/Icons";
import NewQuote from "./components/NewQuote/NewQuote";
import Quote from "./components/Quote/Quote";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        setQuotes(response.data.slice(0, 101));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let quote;
  let trial;
  const newQuoteHandler = () => {
    // create random number to 100
    let randomIndex = Math.floor(Math.random() * 100 + 1);
    let newQuote = quotes.filter((quote, index) => {
      return index === randomIndex;
    });
    quote = newQuote.map((quote, index) => {
      return <Quote key={index} quote={quote.text} author={quote.author} />;
    });
    console.log("clicked");
  };

  if (loading) {
    quote = "Loading quotes...";
  } else {
    newQuoteHandler();
  }

  return (
    <>
      <div className={styles.Quote_box}>
        {trial}
        {quote}
        <Icons />
        <NewQuote />
      </div>
      <Footer />
    </>
  );
};

export default App;
