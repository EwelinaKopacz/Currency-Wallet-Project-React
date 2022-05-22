import {createStore} from 'redux';
import localStorageReducer from './modules/localStorage/localStorage.reductor';
import { saveToLocalStorage} from './functions/saveToLocalStorage';

const store = createStore(
    localStorageReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(()=> saveToLocalStorage(store.getState()));

export default store;