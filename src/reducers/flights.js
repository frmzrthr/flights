import { FETCH_FLIGHTS, FILTER_FLIGHTS } from '../constants/flights'

const initialState = {
  isFetched: false,
  carrier: '',
  result: []
};


export default function flights(state = initialState, action) {
  switch (action.type) {
    case FETCH_FLIGHTS:
      return Object.assign({}, state, action.data);
    
    case FILTER_FLIGHTS:
      return Object.assign({}, state, action.data);

    default:
      return state
  }
}
