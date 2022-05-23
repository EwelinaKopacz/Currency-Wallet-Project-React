import types from './exchange.types';
import ExchangeRateAPI from "./exchange.api";

const askAPI = new ExchangeRateAPI();

export const setExchangeRate = ({rates}) => {
    return {
        type: types.GET_LATEST_EXCHANGE_RATE,
        payload:{
            rates
        }
    }

}

export const loadExchangeRate = (symbols) => (dispatch) => {
    askAPI.getExchangeRate(symbols)
    .then(resp => dispatch(setExchangeRate(resp)))
}


