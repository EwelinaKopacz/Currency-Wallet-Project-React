import types from './localStorage.types';

export const addItemToWallet = (data) => {
    return {
        type:types.ADD_ITEM_TO_WALLET,
        data
    }
}