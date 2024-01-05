const initialState = {
    randomQuote: null,
    tags: [],
    selectedTag: null,
  };
  
  const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_RANDOM_QUOTE':
        return {
          ...state,
          randomQuote: action.payload,
        };
      case 'SET_TAGS':
        return {
          ...state,
          tags: action.payload,
        };
      case 'SET_SELECTED_TAG':
        return {
          ...state,
          selectedTag: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default quoteReducer;
  