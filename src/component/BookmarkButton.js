import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark, removeBookmark } from '../redux/actions/bookmarkActions';

const BookmarkButton = ({ quote }) => {
  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    // Check if the quote is already bookmarked
    if (quote.isBookmarked) {
      dispatch(removeBookmark(quote.id));
    } else {
      dispatch(addBookmark(quote));
    }
  };

  return (
    <button onClick={handleBookmarkClick}>
      {quote.isBookmarked ? 'Remove Bookmark' : 'Bookmark This Quote'}
    </button>
  );
};

export default BookmarkButton;
