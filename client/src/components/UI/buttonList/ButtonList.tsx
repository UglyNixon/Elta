import React, {FC} from 'react';
import classes from './ButtonList.module.css'
import ButtonLink from "../buttons/buttonLink/ButtonLink";
import {IButtonLink} from "../../../models/IButtonLink";

interface ButtonListProps {
   buttons:IButtonLink[]
}

const ButtonList:FC<ButtonListProps> = ({buttons}) => {


    return (
        <div>

        </div>

    );
};

export default ButtonList;