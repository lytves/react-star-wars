import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import { setCharacterToFavorite, removeCharacterFromFavorite} from '@store/actions'
import styles from './PersonImage.module.css'

const PersonImage = ({personImage, personName, personId}) => {
    const dispatch = useDispatch();
    const set = () => {
        dispatch(setCharacterToFavorite({
            [personId]: {
                name: personName,
                img: personImage
            }
        }));
    }
    const remove = () => {
            dispatch(removeCharacterFromFavorite(personId));
    }
    return (
        <>
            <div className={styles.container}>
                <img className={styles.image} src={personImage} alt={personName}/>
            </div>
            <button onClick={set}>add</button>
            <button onClick={remove}>remove</button>
        </>
    )
}

PersonImage.propTypes = {
    personImage: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string
}

export default PersonImage
