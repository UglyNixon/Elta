import React, {FC, useEffect, useState} from 'react';
import ForModal from "../../UI/forModal/ForModal";
import Modalw from "../../UI/modalW/Modalw";
import ModalInput from "../../UI/input/ModalInput";
import WorkerService from "../../../http/service/workers/WorkerService";
import EditButton, {Color} from "../../UI/buttons/editButton/EditButton";
import Select from "../../UI/select/Select";
import {HideProps} from "../../../models/interfaces/interfaces";

const WorkerCreate:FC<HideProps> = ({hide}) => {
const [data,setData]=useState({name:'',code:'',workerPlace:'',})
    const [places,setPlaces] =useState([])
   useEffect(()=>{
       WorkerService.getAllWorkPlace().then(data=>{
           let arr= data.data.map((a: { title: string;})=>a.title)
           setPlaces(arr)
       })
   },[])
    const cons =async()=>{
        await WorkerService.createWorker(data)
        setData({name:'',code:'',workerPlace:data.workerPlace})
    }
    return (
        <ForModal>
            <Modalw>
                <h3>Новый сотрудник</h3>
                <div className='m-t-3'>
                    <ModalInput value={data.name} text={"Фамилия Имя"} change={(e)=>setData({...data,name:e})} type={'text'}/>
                    <ModalInput value={data.code} text={"Код/ \"0\" если нет"} change={(e)=>setData({...data,code:e})} type={'text'}/>
                    <Select options={places} defaultText={'Участок работы'} change={(e)=>setData({...data,workerPlace:e})}/>
                </div>
                <hr className='m-t-3'/>
                <div className='flex row j-c'>
                    <EditButton title={'Создать'} variant={Color.success} func={cons}/>
                    <EditButton title={'Закрыть'} variant={Color.delete} func={hide}/>

                </div>

            </Modalw>
        </ForModal>
    );
};

export default WorkerCreate;