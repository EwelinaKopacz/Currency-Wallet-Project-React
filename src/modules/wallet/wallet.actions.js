import types from './wallet.types';

export const addItemToWallet = (data) => {
    return {
        type:types.ADD_ITEM_TO_WALLET,
        data
    }
}

export const removeItemFromWallet = (id) =>{
    return {
        type:types.REMOVE_ITEM_FROM_WALLET,
        id

    }
}