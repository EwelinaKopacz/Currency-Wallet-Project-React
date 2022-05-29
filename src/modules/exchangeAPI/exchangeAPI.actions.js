import types from './exchangeAPI.types';
import ExchangeRateAPI from './exchangeAPI.api';

const askAPI = new ExchangeRateAPI();

export const setExchangeRate = (symbol,{date,result}) => {
    return {
        type: types.GET_LATEST_EXCHANGE_RATE,
        payload:{
            [symbol]:result,
            date:date
        }
    }
}

export const setUpdateExchangeRate = (symbol,{date,result}) => {
    return {
        type: types.UPDATE_LATEST_EXCHANGE_RATE,
        payload:{
            [symbol]:result,
            date:date
        }
    }
}

export const loadExchangeRate = (symbol) => (dispatch) => {
    askAPI.getExchangeRate(symbol)
    .then(resp => dispatch(setExchangeRate(symbol,resp)))
}

export const updateLatestExchangeRate = (symbol) => (dispatch) => {
    askAPI.getExchangeRate(symbol)
    .then(resp => dispatch(setUpdateExchangeRate(symbol,resp)))
}