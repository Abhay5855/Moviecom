
import { createStore } from 'redux';

import Reducer from './reducers/Reducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
      Reducer,
});

const store = createStore( rootReducer);

export default store;