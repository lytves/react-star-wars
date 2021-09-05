import { getApiResource } from '@services/api'
import { API_CHARACTERS, API_PERSON } from '@constants/api'

export const getApiCharacters = (queryPage) => getApiResource(API_CHARACTERS + queryPage)
export const getApiPerson = (id) => getApiResource(`${API_PERSON}/${id}/`)

