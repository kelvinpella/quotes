import React, { Component } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Icons from "./components/Icons/Icons";
import NewQuote from "./components/NewQuote/NewQuote";
import Quote from "./components/Quote/Quote";

class App extends Component {
  state = { newQuote: [], quotes: [], loading: true };
  compone;
  componentDidMount = () => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        this.setState({ quotes: response.data, loading: false }, () => {
          this.newQuoteHandler();
          // document.querySelector("#root").style.cssText = `
          // background-color:red;
          // width:100%;
          // height:100%;
          // display: flex;
          // flex-direction: column;
          // align-items: center;
          // justify-content: center;
          // `;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentWillMount() {
    document.querySelector("#root").style.cssText = `
          background-color:red;
          width:100%;
          height:100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color:yellow
          `;
  }
  newQuoteHandler = () => {
    // create random number to 100
    console.log("clicked");
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

    return (
      <>
        <div className={styles.Quote_box}>
          {loading && <p className={styles.Loading}>"</p>}
          {newQuote}
          <Icons />
          <NewQuote loadNewQuote={this.newQuoteHandler} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
