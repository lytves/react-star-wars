import PropTypes from 'prop-types'
import styles from './PersonImage.module.css'

const PersonImage = ({personImage, personName}) => {

    return (
        <>
            <div className={styles.container}>
                <img className={styles.image} src={personImage} alt={personName}/>
            </div>
        </>
    )
}

PersonImage.propTypes = {
    personImage: PropTypes.string,
    personName: PropTypes.string
}

export default PersonImage
