import { combineReducers } from 'redux'
import flights from './flights'

import {
  routerReducer
} from 'react-router-redux';

const rootReducer = combineReducers({
  flights,
  routing: routerReducer
});

export default rootReducer
