import {useEffect, useState} from "react";
import {NavLink} from 'react-router-dom'
import Favorites from "../Favorites";
import styles from './Header.module.css'
import imgLight from './img/light.svg'
import imgDark from './img/dark.svg'
import imgGeneral from './img/general.svg'
import {THEME_LIGHT, THEME_DARK, THEME_GENERAL, useTheme} from '@context/ThemeProvider'

const Header = () => {
    const [icon, setIcon] = useState(imgGeneral)
    const isTheme = useTheme()

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                setIcon(imgLight)
                break;
            case THEME_DARK:
                setIcon(imgDark)
                break;
            default:
            case THEME_GENERAL:
                setIcon(imgGeneral)
                break;
        }
    })

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="Star Wars"/>
            <ul className={styles.list__container}>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/characters/?page=1">Characters</NavLink></li>
                <li><NavLink to="/404" exact>Not Found</NavLink></li>
            </ul>
            <Favorites/>
        </div>
    )
}

export default Header
