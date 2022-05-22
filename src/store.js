import {createStore} from 'redux';
import localStorageReducer from './modules/localStorage/localStorage.reductor';
import { saveToLocalStorage,loadFromLocalStorage} from './functions/localStorage';

const persitedState = loadFromLocalStorage();

const store = createStore(
    localStorageReducer,
    persitedState,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
)


store.subscribe(()=> saveToLocalStorage(store.getState()));

export default store;