import { getApiResource } from '../services/api'

const SWAPI_ROOT = 'https://swapi.dev/api/'
const SWAPI_CHARACTERS = 'people'

export const getApiCharacters = () => {
    return getApiResource(SWAPI_ROOT + SWAPI_CHARACTERS)
}
