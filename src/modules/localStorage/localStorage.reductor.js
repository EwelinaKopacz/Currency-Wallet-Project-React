import types from './localStorage.types'

const initState = [];

const localStorageReducer = (state = initState, action) => {
    switch(action.type){
        case types.ADD_ITEM_TO_WALLET:
            return [
                ...state,
                action.payload,
            ]
        default:
            return state;
    }
}

export default localStorageReducer;
