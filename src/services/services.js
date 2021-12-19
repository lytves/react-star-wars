import { getApiResource } from '@services/api'
import { API_CHARACTERS, API_PERSON, API_SEARCH} from '@constants/api'

export const getApiCharacters = (queryPage) => getApiResource(API_CHARACTERS + queryPage + "&limit=10")
export const getApiPerson = (id) => getApiResource(`${API_PERSON}/${id}/`)
export const getApiSeacrh = (text) => getApiResource(`${API_SEARCH}${text}`)

