import types from './exchangeAPI.types';

const initState = {};

const exchageReductor = (state=initState,action) => {
    switch (action.type){
        case types.GET_LATEST_EXCHANGE_RATE:
            const {curr, rate, date} = action.payload;
            const newState = {...state}

            if(!newState[date]){
                newState[date] = {};
            }
            newState[date][curr] = rate;

            return newState;

        default:
            return state;
    }
}

export default exchageReductor;