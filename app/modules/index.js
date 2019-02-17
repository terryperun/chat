import { combineReducers } from 'redux';

const appReducer = combineReducers({
  todo: (state = {}, action) => state,
});

export default appReducer;
