// commons
export const HTTPS = 'https://'
export const HTTP = 'http://'

// swapi
export const SWAPI_ROOT = 'www.swapi.tech/api/'
export const SWAPI_CHARACTERS = 'people'
export const SWAPI_PARAM_PAGE = '/?page='
export const SWAPI_PARAM_SEARCH = '/?name='

export const API_CHARACTERS = HTTPS + SWAPI_ROOT + SWAPI_CHARACTERS + SWAPI_PARAM_PAGE
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_CHARACTERS
export const API_SEARCH = HTTPS + SWAPI_ROOT + SWAPI_CHARACTERS + SWAPI_PARAM_SEARCH

// visualguide
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/'
const GUIDE_CHARACTERS = 'characters/'
export const GUIDE_IMG_EXTENSION = '.jpg'
export const GUIDE_CHARACTERS_IMG = GUIDE_ROOT_IMG + GUIDE_CHARACTERS
