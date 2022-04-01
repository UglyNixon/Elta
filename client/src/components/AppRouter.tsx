import React, {FC } from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'


import { authRoutes, publicRoutes } from '../routes';
import {BASE_ROUTE, LOGIN_ROUTE} from '../utils/consts';



const AppRouter:FC = () => {


    return (

        <Routes>
            {
                publicRoutes.map(({path,Component})=>
                    <Route key={path} path={path} element={<Component/>} />
                )
            } {
                authRoutes.map(({path,Component})=>
                <Route key={path} path={path} element={<Component/>} />
            )
        }
            <Route path="*" element={<Navigate to ={BASE_ROUTE} />}/>

        </Routes>
    );
};

export default AppRouter