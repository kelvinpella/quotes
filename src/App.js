import React, { Component } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Icons from "./components/Icons/Icons";
import NewQuote from "./components/NewQuote/NewQuote";
import Quote from "./components/Quote/Quote";

class App extends Component {
  state = { newQuote: [], quotes: [], loading: true };
  componentDidMount = async () => {
    await axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        this.setState({ quotes: response.data, loading: false }, () => {});
      })
      .catch((error) => {
        console.log(error);
      });
    this.newQuoteHandler();
    this.modifyQuote();
  };

  randomColorGenerator = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  modifyQuote = () => {
    // get random color
    let color = this.randomColorGenerator();
    if (color === "#FFFFFF") {
      color = "#342224";
    }
    //modify root element initial properties
    document.querySelector("#root").style.backgroundColor = color;
    // change opacity from 0 to 1, and color  when displaying new quote
    let parent = document.querySelector("#root").firstChild;
    for (let i = 0; i < 2; i++) {
      parent.children[i].style.cssText = `color:${color}`;
      parent.children[i].animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 2000,
        direction: "reverse",
        easing: "ease-in-out",
      });
    }
    this.newQuoteHandler();
  };

  newQuoteHandler = () => {
    // create random number to 100
    let randomIndex = Math.floor(Math.random() * 100 + 1);
    let singleQuote = this.state.quotes.filter((quote, index) => {
      return index === randomIndex;
    });
    this.setState({
      newQuote: singleQuote.map((quote, index) => {
        return <Quote key={index} quote={quote.text} author={quote.author} />;
      }),
    });
  };

  render() {
    const { newQuote, loading } = this.state;
    // change size of parent container(#root) for the app
    document.querySelector("#root").setAttribute("class", `${styles.Root}`);

    return (
      <>
        <div className={styles.Quote_box}>
          {loading && <p className={styles.Loading}>"</p>}
          {newQuote}
          <Icons />
          <NewQuote loadNewQuote={this.modifyQuote} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
