import React from 'react';
import QuoteGenerator from '../component/QuoteGenerator'
import TagDropdown from '../component/TagDropdown';

const Home = () => {
  return (
    <div>
      <h1>Quote Generator App</h1>
      <TagDropdown />
      <QuoteGenerator />
    </div>
  );
};

export default Home;

