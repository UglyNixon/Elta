
import Auth from './pages/Auth'
import {
    REGISTRATION_ROUTE,
    LOGIN_ROUTE,
    BASE_ROUTE,
    ADMIN_ROUTE,
    JOURNALS_ROUTE,
    CREATE_WORKER_ROUTE,
    CREATE_WORKER_PLACE_ROUTE,
    RUCHKA_ROUTE,
    RUCHKA_DEFEC_ROUTE,
    PRODUCT_ROUTE,
    PLANS_ROUTE,
    MATERIAL_ROUTE, RUCHKA_REWORK, RUCHKA_MAIN_ROUTE
} from './utils/consts'
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import {Routes} from "./models/IRoutes";
import Ruchka from "./pages/productPages/ruchka/Ruchka";
import RuchkaDefec from "./pages/productPages/defec/RuchkaDefec";
import Products from "./pages/productPages/Products";
import Journals from "./pages/journals/Journals";
import Plans from "./pages/plans/Plans";
import Materials from "./pages/materials/Materials";
import RuchkaRework from "./pages/productPages/ruchka/RuchkaRework";
import RuchkaMain from "./pages/productPages/ruchka/RuchkaMain";



export const authRoutes :Routes[]= [
    {
        path:JOURNALS_ROUTE,
        Component:Journals
    },
    {
        path:RUCHKA_ROUTE,
        Component:Ruchka
    },
    {
        path:RUCHKA_DEFEC_ROUTE,
        Component:RuchkaDefec
    }


]

export const adminRoutes: Routes[]=[
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    {
        path:PRODUCT_ROUTE,
        Component:Products
    },
    {
        path:PLANS_ROUTE,
        Component:Plans
    },
    {
        path:MATERIAL_ROUTE,
        Component:Materials
    },
    {
        path: RUCHKA_REWORK,
        Component: RuchkaRework
    },
    {
        path:RUCHKA_MAIN_ROUTE,
        Component:RuchkaMain
    }


]

export const publicRoutes:Routes[] = [


    {
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path:BASE_ROUTE,
        Component:Main
    },{
        path:LOGIN_ROUTE,
        Component:Auth
    }


]