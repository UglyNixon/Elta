import React, {FC, useContext} from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import {adminRoutes, authRoutes, publicRoutes} from '../routes';
import {BASE_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import {Context} from "../index";



const AppRouter:FC = () => {
    const {userStore} =useContext(Context)
    return (
        <Routes>
            {
                publicRoutes.map(({path,Component})=>
                    <Route key={path} path={path} element={<Component/>} />
                )
            }
            {
                userStore.isAuth&&authRoutes.map(({path,Component})=>
                    <Route key={path} path={path} element={<Component/>} />
                )
            }
            {
                userStore.User.role=="ADMIN"&&adminRoutes.map(({path,Component})=>
                    <Route key={path} path={path} element={<Component/>}/>)
            }

            <Route path="*" element={<Navigate to ={BASE_ROUTE} />}/>

        </Routes>
    );
};

export default AppRouter