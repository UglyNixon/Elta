import React, {FC} from 'react';
import classes from './EditButton.module.css'
export enum Color{
    delete='delete',
    success='success',
    default ='default',
    info='info'
}
interface EditButtonProps {
    title:string,
    func?:(e?:any)=>void,
    variant: Color,
    forList?:boolean
}

const EditButton:FC<EditButtonProps> = ({title,func,variant,forList}) => {

    const color = (function (){
        switch (variant) {
            case 'delete' :
                return '#fd3131'
            case 'success' :
                return  '#4dc74d'
            case `default`:
                return ''
            case `info` :
                return '#cdec50'
        }
    }) ()
 const list = (function(){
     if (forList) return 'forList'
     return ''
 })()

    return (
        <button className={[classes.but,classes[list]].join(' ')} onClick={func} style={{backgroundColor:color}}>{title}</button>
    );
};

export default EditButton;