import React, {FC} from 'react';
import classes from './Modalw.module.css'
const Modalw:FC = ({children}) => {
    return (
        <div className={classes.login}>
            {children}
        </div>
    );
};

export default Modalw;
