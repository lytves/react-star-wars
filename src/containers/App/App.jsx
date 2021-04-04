import {BrowserRouter, NavLink, Route} from 'react-router-dom'

import CharactersPage from '@containers/CharactersPage'
import HomePage from '@containers/HomePage'

import styles from './App.module.css'
import cn from 'classnames'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/characters" exact>Characters</NavLink>

                <Route path="/" exact component={HomePage}/>
                <Route path="/characters" exact component={CharactersPage}/>

            </BrowserRouter>
        </>
    )
}

export default App
