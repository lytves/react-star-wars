import {NavLink} from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {

    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/characters/?page=1" exact>Characters</NavLink></li>
                <li><NavLink to="/404" exact>Not Found</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
