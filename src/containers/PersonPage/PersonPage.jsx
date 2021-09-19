import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import {withApiError} from '@hoc-helpers/withApiError'
import {getApiPerson} from '@services/services'
import {getCharacterImage} from '@utils/getCharacterData'

import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonImage from '@components/PersonPage/PersonImage'
import PersonFilms from '@components/PersonPage/PersonFilms'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'

import styles from './PersonPage.module.css'

const PersonPage = ({match, setApiError}) => {
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personImage, setPersonImage] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)

    useEffect(() => {
            (async () => {
                const id = match.params.id
                try {
                    const res = await getApiPerson(id)

                    setPersonInfo([
                        {title: 'Height', data: res.height},
                        {title: 'Mass', data: res.mass},
                        {title: 'Hair Color', data: res.hair_color},
                        {title: 'Skin color', data: res.skin_color},
                        {title: 'Eye color', data: res.eye_color},
                        {title: 'Birth Year', data: res.birth_year},
                        {title: 'Gender', data: res.gender}
                    ])
                    setPersonName(res.name)
                    setPersonImage(getCharacterImage(id))

                    res.films && res.films.length && setPersonFilms(res.films)

                    setApiError(false)

                } catch (er) {
                    setApiError(true)
                }
            })()
        },
        [])

    return (
        <>
            <PersonLinkBack/>

            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonImage
                        personImage={personImage}
                        personName={personName}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo}/>}
                    {personFilms && <PersonFilms personFilms={personFilms}/>}
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    match: PropTypes.object,
    setApiError: PropTypes.func
}

export default withApiError(PersonPage)
