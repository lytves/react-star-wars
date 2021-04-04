import HomePage from '@containers/HomePage'
import CharactersPage from '@containers/CharactersPage'

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage
    }, {
        path: '/characters',
        exact: true,
        component: CharactersPage
    }
]

export default routesConfig
