import React, { useState } from 'react';
import APIService from '../Components/APIService';

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleFetchQuote = async () => {
    try {
      const data = await APIService();
      setQuote(data);
      setButtonClicked(true); // Set buttonClicked to true after fetching a new quote
    } catch (error) {
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className='quote-wrapper'>
      <div className='quote-quote'>
        {quote && ( //it means that the quote content is displayed only when 'quote' variable is truthy
          <div>
            <p className='quote-content'>"{quote.content}"</p>
            <p className='quote-author'>- {quote.author}</p>
          </div>
        )}
      </div>
      <div className='bottom-section'>
        {buttonClicked && <hr className='line' />}
        <button onClick={handleFetchQuote}>Next Quote</button>
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
