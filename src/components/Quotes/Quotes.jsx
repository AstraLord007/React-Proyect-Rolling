import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loader } from '../Loader';

export const Quotes = () => {
  const [quote, setQuote] = useState({});

  const getQuoteRandom = async id => {
    try {
      const { data } = await axios.get('https://www.breakingbadapi.com/api/quote/random');
      setQuote(data[0]);
    } catch (error) {
      alert('Se produjo un error intentelo luego')
    }
  };

  useEffect(() => {
    getQuoteRandom();
  }, []);

  return (
    <>
      {Object.entries(quote).length ? (
        <div className="card-quote">
          <div className="quote">
            <blockquote>
              <p className='quote-text'>{quote.quote}</p>
            </blockquote>
            <div className="author">{quote.author}</div>
          </div>
          <button onClick={() => getQuoteRandom()}>Siguiente</button>
        </div>
      ) : (
        <div className='container-loading'>
          <Loader />
        </div>
      )}
    </>
  );
};
