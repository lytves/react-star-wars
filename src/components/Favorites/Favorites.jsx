import styles from './Favorites.module.css'
import bookmarksFilled from './img/bookmarks-filled.svg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Favorites = () => {
    const [favCount, setFavCount] = useState();
    const storeData = useSelector(state => state.favoritesReducer)

    useEffect(() => {
        const count = Object.keys(storeData).length
        count.toString().length > 2
        ? setFavCount("...") : setFavCount(count)
    })

    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{favCount}</span>
                <img
                    className={styles.icon}
                    src={bookmarksFilled}
                    alt="Favorites"
                />
            </Link>
        </div>
    )
}

export default Favorites
