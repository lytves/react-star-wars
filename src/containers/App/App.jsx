import {BrowserRouter, Switch, NavLink, Route} from 'react-router-dom'
import routesConfig from '@routes/routesConfig'

import styles from './App.module.css'
import cn from 'classnames'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/characters" exact>Characters</NavLink>

                <Switch>
                    {routesConfig.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App
