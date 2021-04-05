import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

import CharactersList from "../CharactersList";

import styles from './CharactersNavigation.module.css'

const CharactersNavigation = ({
                                  prevPage,
                                  nextPage,
                                  currPage
                              }) => {
    const prevPageNum = +currPage - 1
    const nextPageNum = +currPage + 1

    let prevButton, nextButton
    if (prevPage) {
        prevButton =
            <Link to={`/characters/?page=${prevPageNum}`} className={styles.link}>
                <button className={styles.button}>Previous</button>
            </Link>
    } else {
        prevButton =
            <button className={styles.button}
                    disabled>
                Previous
            </button>
    }

    if (nextPage) {
        nextButton =
            <Link to={`/characters/?page=${nextPageNum}`} className={styles.link}>
                <button className={styles.button}>Next</button>
            </Link>
    } else {
        nextButton =
            <button className={styles.button}
                    disabled>
                Previous
            </button>
    }

    return (
        <div>
            {prevButton}
            {nextButton}
        </div>
    )
}

CharactersList.propTypes = {
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    currPage: PropTypes.string
}

export default CharactersNavigation
