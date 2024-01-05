export const addBookmark = (quote) => ({
    type: 'ADD_BOOKMARK',
    payload: quote,
  });
  
  export const removeBookmark = (quoteId) => ({
    type: 'REMOVE_BOOKMARK',
    payload: quoteId,
  });
  