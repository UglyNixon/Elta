import React, {FC, useContext, useState} from 'react';
import classes from './AuthModal.module.css'
import {Context} from "../../index";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {BASE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import Modalw from "../UI/modalW/Modalw";
import ModalInput from "../UI/input/ModalInput";
const AuthModal:FC = () => {
    const [data,setData] =useState({login:'',password:'',email:"",code:''})
    const navigate = useNavigate()
    const {userStore} =useContext(Context)
    const location = useLocation()
    const isLogin= location.pathname===LOGIN_ROUTE
    const loginFunc= async ()=>{
        await userStore.login(data.login,data.password)
        navigate(BASE_ROUTE)
    }
    const registrationFunc = async ()=>{
        await userStore.registration(data.email,data.login,data.password,data.code)
        setData({login:'',password:'',email:"",code:''})
        navigate(BASE_ROUTE)

    }



    return (
        <div>
            <div className={classes.ribbon}></div>
           <Modalw>
                <h1 className={classes.h1}>{isLogin?"Авторизация":"Регистрация"}</h1>
                <p className={classes.p}>
                    {isLogin?" Введите ваш логин и пароль"
                        :
                        "Заполните все поля"
                    }
                </p>
                <div>
                    <div >

                            <ModalInput
                                type='text'
                                text='Логин'
                                value={data.login}
                                change={(e:string)=>setData({...data,login:e})}

                            />


                        {!isLogin&&
                                <ModalInput
                                    value={data.email}
                                       type='email'
                                       text='Почта'
                                       change={(e:string)=>setData({...data,email:e})}
                                />
                           }


                        {!isLogin&&
                                <ModalInput
                                    value={data.code}
                                       type="text"
                                       text='Код'
                                       change={(e:string)=>setData({...data,code:e})}
                                />
                            }

                            <ModalInput
                                value={data.password}
                                   type="password"
                                   text='Пароль'
                                   change={(e:string)=>setData({...data,password:e})}
                            />


                    </div>
                    <button
                        onClick={ ()=> isLogin?loginFunc():registrationFunc()}
                        className={classes.button}
                    >
                        {isLogin?"Войти":"Зарегистрироваться"}

                        </button>
                    <div className={classes.link}>
                        {isLogin ? <Link to={REGISTRATION_ROUTE}>Регистрация</Link> :
                            <Link to={LOGIN_ROUTE}>Авторизация</Link>
                        }
                    </div>

                </div>
               </Modalw>

        </div>
    );
};

export default observer (AuthModal);