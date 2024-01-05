import React from 'react';
import { useSelector } from 'react-redux';

const BookmarkList = () => {
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);

  return (
    <div>
      <h2>Bookmarked Quotes</h2>
      {bookmarks.map((quote) => (
        <div key={quote.id}>
          <p>{quote.text}</p>
          <footer>{quote.author}</footer>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
