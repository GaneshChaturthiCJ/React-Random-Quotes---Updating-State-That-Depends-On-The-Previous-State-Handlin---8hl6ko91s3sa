import React, { useState, useEffect } from 'react';
import "../styles/App.css";

function App() {
  const [quote, setQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#282c34');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data);
        setBackgroundColor(getRandomColor());
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getRandomColor = () => {
    const colors = ['#282c34', '#c0392b', '#2980b9', '#27ae60', '#8e44ad', '#f39c12'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <div className="quote-container">
        <div className="quote-text">{quote.content}</div>
        <div className="quote-author">- {quote.author}</div>
      </div>
      <button id="new-quote" className="button" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;

