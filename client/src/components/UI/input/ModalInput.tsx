import React, {FC} from 'react';
import classes from './ModalInput.module.css'
interface ModalInputProps {
    text:string,
    autoComp?:string,
    change:(e:string,d?:{})=>void,
    type:string,
    value:string|any,
    data?:any
}
const ModalInput:FC<ModalInputProps> = ({text,autoComp='off',change,type,value,data}) => {
    return (
        <div className={classes.main}>
            <input
                value={value}
                className={classes.input}
                type={type}
                placeholder={`${text}`}
                autoComplete={autoComp}
                onChange={(e)=>change(e.target.value,data)}
            />
        </div>
    );
};

export default ModalInput;