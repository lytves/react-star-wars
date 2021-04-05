import HomePage from '@containers/HomePage'
import CharactersPage from '@containers/CharactersPage'
import NotFoundPage from '@containers/NotFoundPage'

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage
    }, {
        path: '/characters',
        exact: true,
        component: CharactersPage
    }, {
        path: '*',
        exact: false,
        component: NotFoundPage
    }
]

export default routesConfig
