import styles from './CharactersList.module.css'

const CharactersList = ({ characters }) => {

    return (
        <ul>
            {
                characters.map(({id, name, img}) =>
                    <li key={id}>
                        <img src={img} alt={name}/>
                        <p>{name}</p>
                    </li>
                )
            }
        </ul>
    )
}

export default CharactersList
