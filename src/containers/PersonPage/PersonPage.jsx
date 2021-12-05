import React, {useEffect, useState, Suspense} from 'react'
import PropTypes from 'prop-types'
import {useSelector} from "react-redux";

import {withApiError} from '@hoc-helpers/withApiError'
import {getApiPerson} from '@services/services'
import {getCharacterImage} from '@utils/getCharacterData'

import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonImage from '@components/PersonPage/PersonImage'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'
import UILoading from '@ui/UILoading/UILoading'

import styles from './PersonPage.module.css'

// import PersonFilms from '@components/PersonPage/PersonFilms'
const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ({match, setApiError}) => {
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personImage, setPersonImage] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personId, setPersonId] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)
    const storeData = useSelector(state => state.favoritesReducer);

    useEffect(() => {
            (async () => {
                const id = match.params.id
                setPersonId(id)
                Boolean(storeData[id]) && setPersonFavorite(true)

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
                        personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo}/>}
                    {personFilms && (
                        <Suspense fallback={<UILoading theme="yellow"></UILoading>}>
                            <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                    )}
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
