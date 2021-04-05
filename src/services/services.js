import { getApiResource } from '@services/api'
import { API_CHARACTERS } from '@constants/api'

export const getApiCharacters = (queryPage) => getApiResource(API_CHARACTERS + queryPage)
