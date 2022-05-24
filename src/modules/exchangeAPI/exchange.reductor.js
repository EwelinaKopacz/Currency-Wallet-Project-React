import types from './exchange.types';

const initState = {
    rates: []
};

const exchangeApiReductor = (state = initState, action) => {
    switch (action.type){
        case types.GET_LATEST_EXCHANGE_RATE:
            return {
                ...state,
                rates:[
                    ...state.rates,
                    action.payload
                    // from:action.payload.data.query.from,
                    // result:action.payload.data.result,
                ]
            }
        default:
            return state;
    }
}

export default exchangeApiReductor;