import api from '../../services/api';

export const setRandomQuote = (quote) => ({
  type: 'SET_RANDOM_QUOTE',
  payload: quote,
});

export const setTags = (tags) => ({
  type: 'SET_TAGS',
  payload: tags,
});

export const setSelectedTag = (tag) => ({
  type: 'SET_SELECTED_TAG',
  payload: tag,
});

export const fetchRandomQuote = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const tagQuery = state.quotes.selectedTag ? `?tag=${state.quotes.selectedTag}` : '';
    const response = await api.get(`/random${tagQuery}`);
    dispatch(setRandomQuote(response.data));
  } catch (error) {
    console.error('Error fetching random quote:', error);
  }
};

export const fetchTags = () => async (dispatch) => {
  try {
    const response = await api.get('/tags');
    dispatch(setTags(response.data));
  } catch (error) {
    console.error('Error fetching tags:', error);
  }
};
