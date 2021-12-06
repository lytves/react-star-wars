import {useSelector} from 'react-redux'
import {useEffect, useState} from "react";
import CharactersList from "@components/CharactersPage/CharactersList";

import styles from './FavoritesPage.module.css'

const FavoritesPage = ({}) => {
    const [characters, setCharacters] = useState([])
    const storeData = useSelector(state => state.favoritesReducer);

    useEffect(() => {
        const charactersArray = Object.entries(storeData)
        if (charactersArray.length) {
            const res = charactersArray.map(
                item => {
                    return {
                        id: item[0],
                        ...item[1]
                        // name: item[1].name,
                        // img: item[1].img
                    }
                }
            )
            setCharacters(res)
        }
    }, [])

    return (
        <>
            <h1 className="header__text">Bookmarks</h1>
            {characters.length
                ? <CharactersList characters={characters}></CharactersList>
                : <h2 className={styles.comment}>Add you favorites characters to your bookmarks list</h2>
            }
        </>
    )
}

export default FavoritesPage
