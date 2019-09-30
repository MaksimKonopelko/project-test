import { combineReducers } from 'redux'
import { sendRequest } from '../services/http.service';
import { DATA_URL } from '../constants/urls';

export default combineReducers({
  root: function reducer(state = { data: [] }, action) {
    switch (action.type) {
      case 'GET_DATA_BY_URL':
        return {
          ...state,
          data: action.payload
        };
      default:
        return state;
    }
  }
})

export const sendToRefreshProduct = () => (dispatch) => {
  sendRequest(DATA_URL, 'GET').then(result => {

    //console.log('result', result);
    dispatch({ type: 'GET_DATA_BY_URL', payload: result })
  })
};