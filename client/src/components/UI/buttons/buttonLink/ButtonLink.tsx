import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import classes from "./ButtonLink.module.css";

interface ButtonLinkProps {
    title:string,
    path:string
}

const ButtonLink:FC<ButtonLinkProps>  = ({title,path}) => {
    const navigate =useNavigate()
    return (
        <button className={classes.button} onClick={()=>navigate(path)}>{title}</button>
    );
};

export default ButtonLink;