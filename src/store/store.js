import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {setLocalStorage} from "@utils/localStorage";

import rootReducer from './reducers'
import favoritesReducer from "./reducers/favoritesReducer";
import {FAVORITES_STORE} from "./constants/actionTypes";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    setLocalStorage(FAVORITES_STORE, store.getState().favoritesReducer)
})

export default store;
