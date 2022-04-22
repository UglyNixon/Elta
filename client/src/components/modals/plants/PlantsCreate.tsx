import React, {FC, useContext, useState} from 'react';
import ForModal from "../../UI/forModal/ForModal";
import Modalw from "../../UI/modalW/Modalw";
import ModalInput from "../../UI/input/ModalInput";
import EditButton, {Color} from "../../UI/buttons/editButton/EditButton";
import {HideProps} from "../../../models/interfaces/interfaces";
import WorkerService from "../../../http/service/workers/WorkerService";



const PlantsCreate:FC<HideProps> = ({hide}) => {
    const [data,setData]=useState({title:''})

    const  create=async ()=>{
      await  WorkerService.createWorkPlace(data)

        setData({title:''})
    }
    return (
        <ForModal>
            <Modalw>
                <h3>Новый участок производства</h3>
                <div className='m-t-2'>
                    <ModalInput text={'Название участка'} value={data.title} change={(e)=>setData({...data,title:e})} type={'text'}/>
                </div>

                <hr className='m-t-3'/>
                <div className='flex row j-c'>
                    <EditButton title={'Создать'} func={create} variant={Color.default} />
                    <EditButton title={'Закрыть'} variant={Color.delete} func={hide}/>
                </div>

            </Modalw>
        </ForModal>
    );
};

export default PlantsCreate;