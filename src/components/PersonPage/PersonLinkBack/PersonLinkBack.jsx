import {useHistory} from 'react-router-dom'
import styles from './PersonLinkBack.module.css'
import iconBack from './img/back.svg'

const PersonLinkBack = () => {

    const  history = useHistory();

    const handleGoBack = (ev) => {
        ev.preventDefault();
        history.goBack()
    }

    return (
        <>
            <a
                href="#"
                onClick={handleGoBack}
                className={styles.link}
            >
                <img src={iconBack} className={styles.link__img} alt="Go Back"/>
                <span>Go Back</span>
            </a>
        </>
    )
}

export default PersonLinkBack
