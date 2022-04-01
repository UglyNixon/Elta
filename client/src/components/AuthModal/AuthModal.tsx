import React, {FC, useContext, useState} from 'react';
import classes from './AuthModal.module.css'
import {Context} from "../../index";
import {useLocation} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/consts";
const AuthModal:FC = () => {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const {userStore} =useContext(Context)
    const location = useLocation()
    const isLogin= location.pathname===LOGIN_ROUTE
    return (
        <div>
            <div className={classes.ribbon}></div>
            <div className={classes.login}>
                <h1>{isLogin?"Авторизация":"Регистрация"}</h1>
                <p>Введите ваш логин и пароль</p>
                <div >
                    <div className={classes.input}>
                        <div className={classes.blockInput}>
                            <input
                                type="text"
                                placeholder="ЛОГИН"
                                onChange={(e)=>setLogin(e.target.value)}
                            />
                        </div>
                        <div className={classes.blockInput}>
                            <input
                                type="password"
                                placeholder="ПАРОЛЬ"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button onClick={async ()=>await userStore.login(login,password)}>Войти</button>
                </div>
            </div>

        </div>
    );
};

export default AuthModal;