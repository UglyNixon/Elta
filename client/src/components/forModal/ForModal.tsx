import React, {FC} from 'react';
import classes from "./ForModal.module.css";
import AuthModal from "../AuthModal/AuthModal";
const ForModal:FC = () => {
    return (
        <div className={classes.wrap}>
           <AuthModal/>
        </div>
    );
};

export default ForModal;