import {
    HTTP, SWAPI_ROOT, SWAPI_CHARACTERS, API_CHARACTERS,
    GUIDE_CHARACTERS_IMG, GUIDE_IMG_EXTENSION
}
    from '@constants/api'

const getId = (urlStr, category) => {

    const id = urlStr
        .replace(HTTP + SWAPI_ROOT + category, '')
        .replace(/\//g, '')
    return id
}

export const getCharacterId = (urlStr) => getId(urlStr, SWAPI_CHARACTERS)
export const getCharacterImage = id => `${GUIDE_CHARACTERS_IMG}${id}${GUIDE_IMG_EXTENSION}`
