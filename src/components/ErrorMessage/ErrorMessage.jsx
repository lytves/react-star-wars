import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                * SWAPI.DEV API ERROR *<br/>
                Fear is the path to the dark side.<br/>
                Fear leads to anger; anger leads to hate; hate leads to suffering.<br/>
                I sense much fear in you.<br/>
                <span className={styles.right}>Yoda</span>
            </p>
        </>
    )
}

export default ErrorMessage
