import {THEME_LIGHT, THEME_DARK, THEME_GENERAl, useTheme} from '@context/ThemeProvider'
import styles from './ChooseSide.module.css'
import PropTypes from "prop-types";

const ChooseSide = () => {
    const isTheme = useTheme()
    return (
        <>
            {isTheme.theme}
            <button onClick={()=> isTheme.change(THEME_LIGHT)}>Light</button>
            <button onClick={()=> isTheme.change(THEME_DARK)}>Dark</button>
            <button onClick={()=> isTheme.change(THEME_GENERAl)}>General</button>
        </>
    )
}

ChooseSide.propTypes = {
    // characters: PropTypes.array
}

export default ChooseSide
