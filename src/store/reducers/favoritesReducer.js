import {ADD_CHARACTER_TO_FAVORITE, FAVORITES_STORE, REMOVE_CHARACTER_TO_FAVORITE} from "../constants/actionTypes";
import {getLocalStorage} from "../../utils/localStorage";

const initialState = getLocalStorage(FAVORITES_STORE);

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHARACTER_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_CHARACTER_TO_FAVORITE:
            const newState =[];
            Object.entries(state).forEach(([key, value]) => {
                if (key !== action.payload) {
                    newState.push(state[key]);
                }
            });
            return newState
        default:
            return state;
    }
}

export default favoritesReducer;
