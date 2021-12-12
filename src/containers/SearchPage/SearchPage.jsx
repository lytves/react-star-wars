import PropTypes from 'prop-types'
import {useCallback, useEffect, useState} from "react";
import {getApiCharacters, getApiSeacrh} from "@services/services";
import {withApiError} from "@hoc-helpers/withApiError";
import {getCharacterId, getCharacterImage} from '@utils/getCharacterData'
import styles from './SearchPage.module.css'
import SearchPageInfo from "@components/SearchPageInfo";
import {debounce} from "lodash";

const SearchPage = ({setApiError}) => {
    const [inputSearchValue, setInputSearchValue] = useState("")
    const [characters, setCharacters] = useState([])

    const handleInputChange = (event) => {
        const value = event.target.value
        setInputSearchValue(value)
        debouncedGetResponse(value)
    }

    useEffect(() => {
        getResponse('')
    }, [])

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 500),
        []
    );

    const getResponse = async (value) => {
        console.log(value)
        const res = await getApiSeacrh(value)
        if (res) {
            const charactersList = res.results.map(({name, url}) => {
                    const id = getCharacterId(url)
                    const image = getCharacterImage(id)
                    return {
                        id,
                        name,
                        image
                    }
                }
            )
            setCharacters(charactersList)
            setApiError(false)
        } else {
            setApiError(true)
        }
    }

    return (
        <>
            <h1 className="header__text">Search</h1>
            <input
                type="text"
                value={inputSearchValue}
                onChange={handleInputChange}
                placeholder="Type character's name"
            />
            <SearchPageInfo characters={characters}/>
        </>
    )
}

SearchPage.propTypes = {
    setApiError: PropTypes.func
}

export default withApiError(SearchPage)
