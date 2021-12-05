import {useSelector} from 'react-redux'

import styles from './FavoritesPage.module.css'
import favoritesReducer from "@store/reducers/favoritesReducer";

const FavoritesPage = ({}) => {
    const storeData = useSelector(state => state.favoritesReducer);
    return (
        <>
            <h1>FavPage</h1>
        </>
    )
}

export default FavoritesPage
