import {BrowserRouter, Switch, Route} from 'react-router-dom'
import routesConfig from '@routes/routesConfig'

import Header from '@components/Header'

import styles from './App.module.css'
import cn from 'classnames'
import HashRouter from "react-router-dom/es/HashRouter";

const App = () => {
    return (
        <>
            <HashRouter>
                <div className={styles.wrapper}>
                    <Header/>

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
                </div>
            </HashRouter>
        </>
    )
}

export default App
