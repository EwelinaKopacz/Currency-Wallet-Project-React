import {createStore} from 'redux';
import localStorageReducer from './modules/localStorage/localStorage.reductor';

const store = createStore(
    localStorageReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;