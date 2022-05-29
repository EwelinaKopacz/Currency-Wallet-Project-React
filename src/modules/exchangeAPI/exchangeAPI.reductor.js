import types from './exchangeAPI.types';

const initState = [];

const exchageReductor = (state=initState,action) => {
    switch (action.type){
        case types.GET_LATEST_EXCHANGE_RATE:
            return [
                ...state,
                action.payload
            ]

        case types.UPDATE_LATEST_EXCHANGE_RATE:
            const {key} = action.payload
            // znajdz el z takim kluczem
            const findItem = state.find((item) => item[key] === key) 

            // zaktualizuj el o takim kluczu
            let newState = state
            newState = state.map((item) => {
                console.log(item)
                if(item === findItem){
                    return {item:action.payload}
                } return item

            })
            // ustaw nowy state
            return [
                newState
            ]
        default:
            return state;
    }
}

export default exchageReductor;