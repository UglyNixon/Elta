import React, {FC} from 'react';
import classes from './Select.module.css'
import {IRuchka} from "../../../models/http/IRuchka";
interface SelectProps {
    options:any[],
    defaultText?:string
    change: (e:string,d:{})=>void,
    data?:any

}

const Select:FC<SelectProps> = ({options,defaultText="Выбрать...",change,data}) => {
    return (
        <div className={classes.main}>
            <select className={classes.input}
                    onChange={(e)=>change(e.target.value,data)}
            >

                <option value="" selected hidden disabled >{defaultText}</option>
                {options.map(i=><option className={classes.option} key={i}>{i}</option>)}
            </select>
        </div>

    );
};

export default Select;