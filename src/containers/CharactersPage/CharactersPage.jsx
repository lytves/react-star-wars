import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import {withApiError} from '@hoc-helpers/withApiError'
import CharactersList from '@components/CharactersPage/CharactersList'
import CharactersNavigation from '@components/CharactersPage/CharactersNavigation'
import {getApiCharacters} from '@services/services'
import {changeHttp} from '@services/api'
import {getCharacterId, getCharacterImage} from '@utils/getCharacterData'
import {useQueryParams} from "@hooks/useQueryParams";

import styles from './CharactersPage.module.css'

const CharactersPage = ({setApiError}) => {
    const [characters, setCharacters] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [currPage, setCurrPage] = useState(1)

    const query = useQueryParams();
    const queryPage = + query.get('page') || 1 // via "+" we do a casting for "page" from string to number

    const getCharacters = async (queryPage) => {
        try {
            const res = await getApiCharacters(queryPage)
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

            setPrevPage(changeHttp(res.previous))
            setNextPage(changeHttp(res.next))
            setCurrPage(queryPage)

            setApiError(false)
        } catch (er) {
            setApiError(true)
        }
    }

    useEffect(() => {
        getCharacters(queryPage)
    }, [queryPage])

    return (
        <>
            <CharactersNavigation
                prevPage={prevPage}
                nextPage={nextPage}
                currPage={currPage}
            />
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
