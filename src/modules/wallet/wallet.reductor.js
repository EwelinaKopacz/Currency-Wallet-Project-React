import types from './wallet.types';

const initState = [];

const walletReductor = (state=initState,action) => {
    switch(action.type){
        case types.ADD_ITEM_TO_WALLET:
            return [
                ...state,
                action.data
            ]
        case types.REMOVE_ITEM_FROM_WALLET:
            const newState = state.filter(item => item.id !== action.id)
            return newState;
        default:
            return state;
    }
}

export default walletReductor;