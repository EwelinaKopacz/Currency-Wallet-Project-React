import types from './exchangeAPI.types';
import ExchangeRateAPI from './exchangeAPI.api';

const askAPI = new ExchangeRateAPI();

export const setExchangeRate = (symbol,{result}) => {
    return {
        type: types.GET_LATEST_EXCHANGE_RATE,
        payload:{
            [symbol]:result
        }
    }
}

export const loadExchangeRate = (symbol) => (dispatch) => {
    askAPI.getExchangeRate(symbol)
    .then(resp => dispatch(setExchangeRate(symbol,resp)))
}