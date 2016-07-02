import { combineReducers } from 'redux';

import followers from './followers';

const appReducer = combineReducers({
  followers: followers,
});

export default appReducer;