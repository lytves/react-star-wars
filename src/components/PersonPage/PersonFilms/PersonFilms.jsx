import styles from './PersonFilms.module.css'
import PropTypes from "prop-types";

import {makeConcurrentRequest, checkProtocol} from "@services/api";
import {useState, useEffect} from "react";

const PersonFilms = ({personFilms}) => {

    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {
        (async () => {
                const filmsHTTPS = personFilms.map(url => checkProtocol(url))
                const response = await makeConcurrentRequest(filmsHTTPS)
                setFilmsName(response)
            })()
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <ul className={styles.list__container}>
                    {filmsName
                        .sort((a,b) => a.episode_id - b.episode_id)
                        .map(({title, episode_id}) =>
                            <li key={episode_id} className={styles.list__item}>
                                <span className={styles.list__episode}>Episode {episode_id}</span>
                                <span className={styles.list__colon}>:</span>
                                <span className={styles.list__title}>{title}</span>
                            </li>
                        )}
                </ul>
            </div>
        </>
    )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}
export default PersonFilms
