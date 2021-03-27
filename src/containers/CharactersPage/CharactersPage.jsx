import {useEffect, useState} from 'react'
import styles from './CharactersPage.module.css'
import {getApiCharacters} from '../../services/services'
import {getCharacterId, getCharacterImage} from '../../utils/getCharacterData'

const CharactersPage = () => {

    const [characters, setCharacters] = useState(null)

    const getCharacters = async () => {
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
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <>
            {characters && (
                <ul>
                    {
                        characters.map(({id, name, img}) =>
                            <li key={id}>
                                <img src={img} alt={name} />
                                <p>{name}</p>
                            </li>
                        )
                    }
                </ul>
            )}
        </>
    )
}

export default CharactersPage
