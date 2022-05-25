import types from './wallet.types';

const initState = [];

const walletReductor = (state=initState,action) => {
    switch(action.type){
        case types.ADD_ITEM_TO_WALLET:
            return [
                ...state,
                action.data
            ]
        default:
            return state;
    }
}

export default walletReductor;