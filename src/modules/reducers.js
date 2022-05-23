import { combineReducers } from "redux";
import localStorageReducer from "./localStorage/localStorage.reductor";
import exchangeApiReductor from "./exchangeAPI/exchange.reductor";

const rootReducers = combineReducers({
    wallet:localStorageReducer,
    exchange:exchangeApiReductor
})

export default rootReducers;