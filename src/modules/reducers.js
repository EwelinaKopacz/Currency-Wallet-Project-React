import { combineReducers } from "redux";
import walletReductor from "./wallet/wallet.reductor";
import exchageReductor from "./exchangeAPI/exchangeAPI.reductor";

const rootReducers = combineReducers({
    wallet:walletReductor,
    exchange:exchageReductor
})

export default rootReducers;