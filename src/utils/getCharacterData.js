import {
    HTTP, SWAPI_ROOT, SWAPI_CHARACTERS, API_CHARACTERS,
    GUIDE_CHARACTERS_IMG, GUIDE_IMG_EXTENSION
}
    from '@constants/api'
import {changeHttp} from "../services/api";

const getId = (urlStr, category) => {

    const protocol = changeHttp(urlStr)
    const replaced = urlStr
        .replace(protocol + SWAPI_ROOT + category, '')
        .replace(/\//g, '')
    return replaced
}

export const getCharacterId = (urlStr) => getId(urlStr, SWAPI_CHARACTERS)
export const getCharacterImage = id => `${GUIDE_CHARACTERS_IMG}${id}${GUIDE_IMG_EXTENSION}`
