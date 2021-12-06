import {NavLink} from 'react-router-dom'
import Favorites from "../Favorites";
import styles from './Header.module.css'

const Header = () => {

    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/characters/?page=1">Characters</NavLink></li>
                <li><NavLink to="/404" exact>Not Found</NavLink></li>
            </ul>
            <Favorites />
        </div>
    )
}

export default Header
