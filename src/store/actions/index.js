import {ADD_CHARACTER_TO_FAVORITE, REMOVE_CHARACTER_TO_FAVORITE} from "@store/constants/actionTypes";

export const setCharacterToFavorite = (character) => ({
  type: ADD_CHARACTER_TO_FAVORITE,
  payload: character
})
export const removeCharacterFromFavorite = (personId) => ({
    type: REMOVE_CHARACTER_TO_FAVORITE,
    payload: personId
})
