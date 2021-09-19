import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import styles from './UILoading.module.css'
import loaderYellow from './img/loader-yellow.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'
import cn from 'classnames'

const UILoading = ({
                       theme = "white",
                       isShadow = true,
                       classes
                   }) => {

    const [loaderItem, setLoaderItem] = useState(null)

    useEffect(() => {
        switch (theme) {
            case "blue":
                setLoaderItem(loaderBlue)
                break;
            case "yellow":
                setLoaderItem(loaderYellow)
                break;
            case "white":
            default:
                setLoaderItem(loaderWhite)
                break;

        }
    }, [])

    return (
        <img
            src={loaderItem}
            className={cn(styles.loader, isShadow && styles.shadow, classes)}
            alt="Loader"
        />
    )
}

UILoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string
}

export default UILoading
