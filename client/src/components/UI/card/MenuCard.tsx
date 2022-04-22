import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import classes from "./MenuCard.module.css";
interface CardProps {
    title:string;
    text:string;
    path:string;

}
const MenuCard:FC<CardProps> = ({title,path,text}) => {
    const navigate = useNavigate()
    return (
        <div
            className={classes.div}
            onClick={()=>navigate(path)}>
            <h3>{title}</h3>
            <hr className='m-t-3'/>
            <div className='m-t-3'>
                {text}
            </div>


        </div>
    );
};

export default MenuCard;