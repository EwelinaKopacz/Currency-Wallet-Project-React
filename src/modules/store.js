import rootReducers from './reducers';
import {createStore,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import { saveToLocalStorage,loadFromLocalStorage} from '../functions/localStorage';

const persitedState = loadFromLocalStorage();

const store = createStore(
    rootReducers,
    persitedState,
    composeWithDevTools(applyMiddleware(thunk))
)


store.subscribe(()=> saveToLocalStorage(store.getState()));

export default store;