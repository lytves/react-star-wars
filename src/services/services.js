import { getApiResource } from '@services/api'
import { API_CHARACTERS } from '@constants/api'

export const getApiCharacters = () => getApiResource(API_CHARACTERS)
