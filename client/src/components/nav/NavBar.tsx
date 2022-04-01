import React, { useContext,FC} from 'react';

import {Link,  useNavigate} from 'react-router-dom'

import {observer} from 'mobx-react-lite'
import classes from "./NavBar.module.css";
import {ADMIN_ROUTE, BASE_ROUTE, LOGIN_ROUTE} from "../../utils/consts";

const NavBar:FC = observer(() => {
    const navigate=useNavigate()


    return (

    <nav className={classes.NavBar}>
        <Link to={BASE_ROUTE} className={classes.links}>Меню</Link>
        <div className={classes.AuthLink}>
            <Link className={[classes.links,classes.right].join(' ')} to={ADMIN_ROUTE}>Админ панель</Link>
            <Link className={[classes.links,classes.right].join(' ')} to={LOGIN_ROUTE}>Авторизация</Link>
        </div>
    </nav>
    );
})

export default NavBar;