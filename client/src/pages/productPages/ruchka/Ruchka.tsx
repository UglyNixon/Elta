import React, {useState} from 'react';
import classes from "./Ruchka.module.css";
import EditButton, {Color} from "../../../components/UI/buttons/editButton/EditButton";
import RuchkaCreate from "../../../components/modals/ruchka/RuchkaCreate";
import {observer} from "mobx-react-lite";
import RuchkaBrak from "../../../components/modals/ruchka/RuchkaBrak";

const Ruchka = () => {
    const [createVis,setCreateVis]=useState(false)
    const [brakVis,setBrakVis]=useState((false))
    const [deleteVis,setdeleteVis]=useState(false)
    const [analVis,setanalVis]=useState(false)
    const [black,setBlack] =useState('')


    return (
        <div className={['container','column',classes[black]].join(' ')}>
                <div className={[classes.cont].join(' ')}>
                    <EditButton func={()=>{setBlack('black');setCreateVis(true)}} title={'Создать'} variant={Color.success}/>
                    <EditButton title={'Анализ'} variant={Color.default}/>
                    <EditButton title={'Удалить'} variant={Color.delete}/>
                    <EditButton func={()=>{setBlack('black');setBrakVis(true)}} title={'Брак'} variant={Color.info}/>
                </div>
            {createVis&&<RuchkaCreate  hide={()=>{setBlack('');setCreateVis(false)}}/>}
            {brakVis&&<RuchkaBrak hide={()=>{setBlack('');setBrakVis(false)}}/>}

        </div>
    );
};

export default observer(Ruchka);