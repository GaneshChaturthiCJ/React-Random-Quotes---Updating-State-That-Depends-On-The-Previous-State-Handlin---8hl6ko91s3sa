import React, {useState } from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
  const [quote, setQuote] = useState({ author: "", AuthorQuote: "" });
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleClick = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const response = await res.json();
    setQuote({ author: response.author, AuthorQuote: response.content });

    let max = colors.length;
    let min = 0;
    let randomColor = Math.floor(Math.random() * (max - min + 1));
    setBackgroundColor(colors[randomColor]);
  };

  return (

      <div id="main" style={{backgroundColor}}>
        <div id="wrapper">
          <div className="quote-text">{quote.author}</div>
          <div className="quote-author">{quote.AuthorQuote}</div>

          <button type="button" className="buttons" onClick={handleClick}>
            FETCH QUOTE
          </button>
        </div>
      </div>
  );
};

export default App;

