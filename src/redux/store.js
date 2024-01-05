import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import quoteReducer from './reducers/quoteReducer';
import bookmarkReducer from './reducers/bookmarkReducer';

const rootReducer = combineReducers({
  quotes: quoteReducer,
  bookmarks: bookmarkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
