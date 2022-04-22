import React, { useContext,FC} from 'react';

import {Link,  useNavigate} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import classes from "./NavBar.module.css";
import {ADMIN_ROUTE, BASE_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {Context} from "../../index";

const NavBar:FC = observer(() => {
    const {userStore} =useContext(Context)
    const navigate=useNavigate()
    const outFunc = ()=>{
        userStore.logout().finally(()=>localStorage.removeItem('token'))
    }
    return (
    <nav className={classes.NavBar}>
        <Link to={BASE_ROUTE} className={classes.links}>Меню</Link>
        {userStore.isAuth?
            <div className={classes.AuthLink}>
                {
            userStore.User.role==="ADMIN"&&<Link className={[classes.links,classes.right].join(' ')} to={ADMIN_ROUTE}>Админ панель</Link>

                }
                <Link
                    className={[classes.links,classes.right].join(' ')}
                    to={BASE_ROUTE}
                    onClick={()=>outFunc()}
                >Выход</Link>
            </div>
            :
            <div className={classes.AuthLink}>
                <Link className={[classes.links,classes.right].join(' ')} to={LOGIN_ROUTE}>Вход</Link>
            </div>

        }

    </nav>
    );
})

export default NavBar;