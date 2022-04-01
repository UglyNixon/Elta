
import Auth from './pages/Auth'
import {REGISTRATION_ROUTE, LOGIN_ROUTE, BASE_ROUTE, ADMIN_ROUTE} from './utils/consts'
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import {Routes} from "./models/IRoutes";



export const authRoutes :Routes[]= [
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },


]

export const publicRoutes:Routes[] = [

    {
        path:LOGIN_ROUTE,
        Component: Auth
    },

    {
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path:BASE_ROUTE,
        Component:Main
    }
]