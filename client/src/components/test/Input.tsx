import React, {ChangeEvent, FC} from 'react';
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
interface InputProps {
    change:(value:string)=>void
}
const Input:FC<InputProps> = ({change}) => {


    return (
        <div>
            <input
        onChange={(e)=>change(e.target.value)}
            />
        </div>
    );
};

export default Input;