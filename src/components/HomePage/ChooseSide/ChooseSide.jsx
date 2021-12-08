import {THEME_LIGHT, THEME_DARK, THEME_GENERAL, useTheme} from '@context/ThemeProvider'
import styles from './ChooseSide.module.css'
import cn from 'classnames'
import PropTypes from "prop-types";
import imgLightSide from './img/light-side.jpg'
import imgDarkSide from './img/dark-side.jpg'
import imgGeneralSide from './img/general-side.jpg'

const ChooseSideItem = ({
                            theme,
                            text,
                            img,
                            classes
                        }) => {
    const isTheme = useTheme()

    return (
        <div
            className={cn(styles.item, classes)}
            onClick={() => isTheme.change(theme)}
        >
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text}/>
        </div>)
}

ChooseSideItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string
}

const ChooseSide = () => {
    return (
        <>
            <div className={styles.container}>
                <ChooseSideItem
                    theme={THEME_LIGHT}
                    text="LightSide"
                    img={imgLightSide}
                    classes={styles.item__light}
                />
                <ChooseSideItem
                    theme={THEME_DARK}
                    text="DarkSide"
                    img={imgDarkSide}
                    classes={styles.item__dark}
                />
                <ChooseSideItem
                    theme={THEME_GENERAL}
                    text="YodaSide"
                    img={imgGeneralSide}
                    classes={styles.item__general}
                />
            </div>
        </>
    )
}

export default ChooseSide
