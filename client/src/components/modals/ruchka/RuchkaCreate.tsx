import React, {FC, useContext, useEffect, useState} from 'react';
import ForModal from "../../UI/forModal/ForModal";
import ModalInput from "../../UI/input/ModalInput";
import Modalw from "../../UI/modalW/Modalw";
import EditButton, {Color} from "../../UI/buttons/editButton/EditButton";
import Select from "../../UI/select/Select";
import {Context} from "../../../index";
import WorkerService from "../../../http/service/workers/WorkerService";
import RuchkaMaterial from "./RuchkaMaterial";
import RuchkaService from "../../../http/service/products/RuchkaService";
import {observer} from "mobx-react-lite";

interface RuchkaCreateProps {
    hide:()=>void
}
const RuchkaCreate:FC<RuchkaCreateProps> = ({hide}) => {
    const {ruchkaStore}=useContext(Context)
    const [mat,setMat] =useState(false)
    const [workers,setWorkers] =useState([])
    const rStatus=['В работе','Сдан']
    const [data,setData] =useState({
        name:'',
        series:'',
        value:'',
        status:'',
        dolg:'',
        brak:'',
        workerId:'',
        materials:''
    })
    const create = async () => {
         await RuchkaService.createRuchka(data)
         await setData({...data,
            series:'',
            brak:'',
            materials:''})

    }
    useEffect( ()=>{
        WorkerService.getAllWorker({wp:'Ручки'})
            .then(data=>{
              setWorkers(data.data.map((a:{id:string,name:string})=>a.name))

        })
    },[])

    return (
        <div >
            <ForModal>
        <Modalw>
    <Select options={workers} defaultText={'Сборщик...'} change={(e)=>setData({...data,name:e})}/>
    <ModalInput value={data.series} text={'Серия'} type={'text'} change={(e:string)=>setData({...data,series: e})}/>
    <ModalInput value={data.value} text={'Количество'} type={'text'} change={(e:string)=>setData({...data,value: e})}/>
    <Select options={rStatus} defaultText={'Состояние заказа'}change={(e)=>setData({...data,status:e})}/>
    <ModalInput value={data.brak} text={'Брак'} type={'text'} change={(e:string)=>setData({...data,brak: e})}/>
    <ModalInput value={data.dolg} text={'Долг'} type={'text'} change={(e:string)=>setData({...data,dolg: e})}/>
    <EditButton title={"Добавить материалы"} variant={Color.success} func={()=>setMat((true))}/>
    <hr style={{marginTop:20}}/>
    <div className={'flex f-s-b row'}>
        <EditButton title={"Записать"} variant={Color.success} func={create}/>
        <EditButton title={"закрыть"} variant={Color.default} func={hide}/>
    </div>
            {mat&&<RuchkaMaterial hide={()=>setMat(false)} oldData={data} setMatData={setData}  />}

</Modalw>
            </ForModal>
        </div>
            );



};

export default observer(RuchkaCreate);