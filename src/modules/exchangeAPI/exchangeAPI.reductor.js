import types from './exchangeAPI.types';

const initState = [];

const exchageReductor = (state=initState,action) => {
    switch (action.type){
        case types.GET_LATEST_EXCHANGE_RATE:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export default exchageReductor;