import React, {useState} from 'react';
import Input from "./Input";

const Test = () => {
    const [data,setData] =useState({title:'',age:''})
    return (
        <div>
            <Input
change={(e)=>setData({...data,title:e})}
            />
        </div>
    );
};

export default Test;