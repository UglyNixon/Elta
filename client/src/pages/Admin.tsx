import React, {FC, useState} from 'react';

import '../styles/Page.css'
import EditButton, {Color} from "../components/UI/buttons/editButton/EditButton";
import ForModal from "../components/UI/forModal/ForModal";
import WorkerCreate from "../components/modals/createWorker/WorkerCreate";
import PlantsCreate from "../components/modals/plants/PlantsCreate";

const Admin:FC = () => {
    const [work,setWork] =useState(false)
    const [workPl,setWorkPl] =useState(false)
    return (
<div className='container flex column'>
   <EditButton title={'Сотрудники'} variant={Color.default} func={()=>setWork(true)}/>
   <EditButton title={'Участки производства'} variant={Color.default} func={()=>setWorkPl(true)}/>
    {work&&<WorkerCreate hide={()=>setWork(false)}/>}
    {workPl&&<PlantsCreate hide={()=>setWorkPl(false)}/>}

</div>


    );
};

export default Admin;