import { useEffect, useState } from 'react'
import styles from './CharactersPage.module.css'
import { getApiCharacters } from '../../services/services'

const CharactersPage = () => {

    const [characters, setCharacters] = useState(null)

    const getCharacters = async () => {
        const res = await getApiCharacters()
        const charactersList = res.results.map(({name, url}) => ({name, url}))
        setCharacters(charactersList)
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <>
            {characters && (
                <ul>
                    {
                        characters.map(({name, url}) =>
                            <li key={name}>{name}</li>
                        )
                    }
                </ul>
            )}
        </>
    )
}

export default CharactersPage
