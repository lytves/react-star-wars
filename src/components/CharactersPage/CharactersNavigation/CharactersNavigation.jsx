import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

import CharactersList from "../CharactersList";
import UIButton from "@ui/UIButton";

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
            <Link to={`/characters/?page=${prevPageNum}`} className={styles.buttons}>
                <UIButton
                    text="Previous"
                />
            </Link>
    } else {
        prevButton =
            <UIButton
                classes={styles.link}
                text="Previous"
                disabled={true}
            />
    }

    if (nextPage) {
        nextButton =
            <Link to={`/characters/?page=${nextPageNum}`} className={styles.buttons}>
                <UIButton
                    text="Next"
                />
            </Link>
    } else {
        nextButton =
            <UIButton
                classes={styles.link}
                text="Next"
                disabled={true}
            />
    }

    return (
        <div className={styles.container}>
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
