import React, {useState } from "react";
import "./App.css"

// var colors = [
//   '#16a085',
//   '#27ae60',
//   '#2c3e50',
//   '#f39c12',
//   '#e74c3c',
//   '#9b59b6',
//   '#FB6964',
//   '#342224',
//   '#472E32',
//   '#BDBB99',
//   '#77B1A9',
//   '#73A857'
// ];

const App = () => {
  const [quote, setQuote] = useState({author: "", AuthorQuote: ""});

const handleClick = async () =>{
  const res = await fetch("https://api.quotable.io/random");
  const response = await res.json();
      console.log(quote);
  setQuote({quote: response.author, AuthorQuote: response.content});
}


    return (
      <div id="main">
        <div id="wrapper">

          <div className="quote-text">
            {quote.quote}
          </div>
          <div className="quote-author">
            {quote.AuthorQuote}
          </div>

          <button type="button" onClick={handleClick}>Fetch Quote</button>
          
        </div>
      </div>
    );
};

export default App;

