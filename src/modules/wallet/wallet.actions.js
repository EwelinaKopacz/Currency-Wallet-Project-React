import types from './wallet.types';

export const addItemToWallet = (data) => {
    return {
        type:types.ADD_ITEM_TO_WALLET,
        data
    }
}