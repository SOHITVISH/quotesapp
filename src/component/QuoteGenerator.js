import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from '../redux/actions/quoteActions';

const QuoteGenerator = () => {
  const dispatch = useDispatch();
  const randomQuote = useSelector((state) => state.quotes.randomQuote);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleGenerateQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div>
      <blockquote>
        <p>{randomQuote?.text}</p>
        <footer>{randomQuote?.author}</footer>
      </blockquote>
      <button onClick={handleGenerateQuote}>Generate Another Quote</button>
    </div>
  );
};

export default QuoteGenerator;
