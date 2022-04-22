import React, {FC} from 'react';
import classes from "./ForModal.module.css";


const ForModal:FC = ({children}) => {
    return (
        <div className={classes.wrap}>
            {children}
        </div>
    );
};
export default ForModal;