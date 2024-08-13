

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import BookReducer from './BookReducer'; 

const store = createStore(BookReducer, applyMiddleware(thunk));

export default store;