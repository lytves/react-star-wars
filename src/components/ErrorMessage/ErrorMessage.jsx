import styles from './ErrorMessage.module.css'
import UIVideo from "../UI/UIVideo";
import video from './video/fail.mp4'

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
            <UIVideo
                src={video}
                clases={styles.video}
                playbackRate={1}
            />
        </>
    )
}

export default ErrorMessage
