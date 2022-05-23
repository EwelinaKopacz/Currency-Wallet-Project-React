import types from './exchange.types';

const initState = {
    rates: {}
};

const exchangeApiReductor = (state = initState, action) => {
    switch (action.type){
        case types.GET_LATEST_EXCHANGE_RATE:
            return {
                ...state,
                rates:action.payload.rates
            }
        default:
            return state;
    }
}

export default exchangeApiReductor;