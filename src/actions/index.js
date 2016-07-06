import * as types from '../constants/flights'
import Sock from '../sock'


export function filterFlights(carrier) {
  return { 
    type: types.FILTER_FLIGHTS, 
    data: { carrier } 
  }
}

export function socketConnect() {
  return dispatch => {
    Sock.connect(() => {
      
      Sock.listenToEvent('data', (data) => {
        dispatch({
          type: types.FETCH_FLIGHTS,
          data: { isFetched: true, result: data }
        })
      });
      
      Sock.sendEvent('data');
      
    });
  };
}
