import HomePage from '@containers/HomePage'
import CharactersPage from '@containers/CharactersPage'
import PersonPage from '@containers/PersonPage'
import NotFoundPage from '@containers/NotFoundPage'
import FavoritesPage from "@containers/FavoritesPage";
import SearchPage from "@containers/SearchPage";

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
        path: '/favorites',
        exact: true,
        component: FavoritesPage
    }, {
        path: '/search',
        exact: true,
        component: SearchPage
    }, {
        path: '/characters/:id',
        exact: true,
        component: PersonPage
    }, {
        path: '*',
        exact: false,
        component: NotFoundPage
    }
]

export default routesConfig
