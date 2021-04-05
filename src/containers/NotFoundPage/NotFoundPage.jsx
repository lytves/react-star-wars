import {useLocation} from "react-router-dom";
import img from '@static/404.jpg'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    let location = useLocation()
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1 className="header__text">404 Not Found Page: {location.pathname}</h1>
                <img src={img} alt="Not Found"></img>
            </div>
        </div>
    )
}

export default NotFoundPage
