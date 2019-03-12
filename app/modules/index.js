import { combineReducers } from 'redux';
import message from './message';

const appReducer = combineReducers({
  // todo: (state = {}, action) => state,
  message,
});

export default appReducer;
