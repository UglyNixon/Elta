import React, {FC, SetStateAction, useState} from 'react';
import ForModal from "../../UI/forModal/ForModal";
import Modalw from "../../UI/modalW/Modalw";
import EditButton, {Color} from "../../UI/buttons/editButton/EditButton";
import ModalInput from "../../UI/input/ModalInput";
import {IMat} from "../../../models/interfaces/interfaces";
import {observer} from "mobx-react-lite";
interface RuchkaMaterialProps {

    setMatData: (a:any)=>void,
    hide:()=>void;
    oldData:any
}
const RuchkaMaterial:FC<RuchkaMaterialProps> = ({hide,setMatData,oldData}) => {
    const [data,setData] =useState({
        'Винт':'',
        "Держатель":'',
        "Шток":'',
        "Корпус":'',
        "Плунжер":'',
        "Цанга":'',
        "Наконечник":'',
        "Втулка":'',
        "Регулятор":''})
    const write =() =>{
        setMatData({...oldData,materials:JSON.stringify(data)})
    }
    return (
       <ForModal>
           <Modalw>
               <div className='flex f-s-b row '>
                   <div className='txt-down-lbl'>Винт:</div>
                       <ModalInput text={'серия'} change={(e)=>setData({...data,'Винт':e})} type={'text'} value={data['Винт']}/>
               </div>
               <div className='flex f-s-b row '>
                   <div className='txt-down-lbl'>Держатель:</div>
                   <ModalInput text={'серия'} change={(e)=>setData({...data,"Держатель":e})} type={'text'} value={data['Держатель']}/>
               </div>
               <div className='flex f-s-b row '>
                   <div className='txt-down-lbl'>Шток:</div>
                   <ModalInput text={'серия'} change={(e)=>setData({...data,"Шток":e})} type={'text'} value={data["Шток"]}/>
               </div>
               <div className='flex f-s-b row '>
                   <div className='txt-down-lbl'>Корпус:</div>
                   <ModalInput text={'серия'} change={(e)=>setData({...data,"Корпус":e})} type={'text'} value={data["Корпус"]}/>
               </div>
               <div className='flex f-s-b row '>
                   <div className='txt-down-lbl'>Плунжер:</div>
                   <ModalInput text={'серия'} change={(e)=>setData({...data,"Плунжер":e})} type={'text'} value={data["Плунжер"]}/>
               </div>
               <div className='flex f-s-b row '>
                   <div className='txt-down-lbl'>Цанга:</div>
                   <ModalInput text={'серия'} change={(e)=>setData({...data,"Цанга":e})} type={'text'} value={data["Цанга"]}/>
               </div>
               <div className='flex f-s-b row '>
                   <div className='txt-down-lbl'>Наконечник:</div>
                   <ModalInput text={'серия'} change={(e)=>setData({...data,"Наконечник":e})} type={'text'} value={data["Наконечник"]}/>
               </div>
               <div className='flex f-s-b row '>
                   <div className='txt-down-lbl'>Втулка:</div>
                   <ModalInput text={'серия'} change={(e)=>setData({...data,"Втулка":e})} type={'text'} value={data['Втулка']}/>
               </div>
               <div className='flex f-s-b row '>
                   <div className='txt-down-lbl'>Регулятор:</div>
                   <ModalInput text={'серия'} change={(e)=>setData({...data,"Регулятор":e})} type={'text'} value={data["Регулятор"]}/>
               </div>

               <div className={'flex f-s-b row'}>
                   <EditButton title={"Записать"} variant={Color.success}  func={()=>{write();hide();}}/>
                   <EditButton title={"Закрыть"} variant={Color.default} func={hide}/>
               </div>

           </Modalw>
       </ForModal>
    );
};

export default observer(RuchkaMaterial);