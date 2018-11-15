import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import  thunk from 'redux-thunk';

import rootReducer from './reducers/index';


import comments from './data/comments';
import posts from './data/posts';


const initialState = {
  posts,
  comments
};

const middleware = [thunk];

const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  );


export const history = syncHistoryWithStore(browserHistory, store);

export default store;


