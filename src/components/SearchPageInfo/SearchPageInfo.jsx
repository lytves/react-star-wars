import PropTypes from 'prop-types'
import styles from './SearchPageInfo.module.css'
import {Link} from "react-router-dom";

const SearchPageInfo = ({characters}) => (
    <>
        {characters.length
            ? (
                <ul className={styles.list__container}>
                    {characters.map(({id, image, name}) =>
                        <li className={styles.list__item} key={id}>
                            <Link to={`/characters/${id}`}>
                                <img className={styles.character__image} src={image} alt={name}/>
                                <p className={styles.character__name}>{name}</p>
                            </Link>
                        </li>
                    )}
                </ul>
            )
            : <h2 className={styles.noresult__container}>No results</h2>
        }
    </>
)

SearchPageInfo.propTypes = {
    characters: PropTypes.array
}

export default SearchPageInfo
