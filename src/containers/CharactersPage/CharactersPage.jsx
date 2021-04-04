import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import {withApiError} from '@hoc-helpers/withApiError'
import CharactersList from '@components/CharactersPage/CharactersList'
import {getApiCharacters} from '@services/services'
import {getCharacterId, getCharacterImage} from '@utils/getCharacterData'

import styles from './CharactersPage.module.css'

const CharactersPage = ({setApiError}) => {
    const [characters, setCharacters] = useState(null)
    const getCharacters = async () => {
        try {
            const res = await getApiCharacters()
            const charactersList = res.results.map(({name, url}) => {
                const id = getCharacterId(url)
                const img = getCharacterImage(id)
                return {
                    id,
                    name,
                    img
                }
            })
            setCharacters(charactersList)
            setApiError(false)
        } catch (er) {
            setApiError(true)
        }
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <>
            <h1>Navigation</h1>
            {
                characters && <CharactersList characters={characters} />
            }
        </>
    )
}

CharactersPage.propTypes = {
    setApiError: PropTypes.func
}

export default withApiError(CharactersPage)
