import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import {setCharacterToFavorite, removeCharacterFromFavorite} from '@store/actions'
import styles from './PersonImage.module.css'

const PersonImage = ({personImage, personName, personId, personFavorite, setPersonFavorite}) => {
    const dispatch = useDispatch();
    const toggleFavoritePerson = () => {
        if (personFavorite) {
            dispatch(removeCharacterFromFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(setCharacterToFavorite({
                [personId]: {
                    name: personName,
                    img: personImage
                }
            }));
            setPersonFavorite(true);
        }
    }
    return (
        <>
            <div className={styles.container}>
                <img className={styles.image} src={personImage} alt={personName}/>
            </div>
            <button onClick={toggleFavoritePerson}>button</button>
        </>
    )
}

PersonImage.propTypes = {
    personImage: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.string,
    setPersonFavorite: PropTypes.func
}

export default PersonImage
