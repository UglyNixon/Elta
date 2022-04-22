import React, {FC, useState} from 'react';
import EditButton, {Color} from "../../../components/UI/buttons/editButton/EditButton";
import ModalInput from "../../../components/UI/input/ModalInput";
import {materialList} from "../../../utils/RuchkaDefecList"
import Select from "../../../components/UI/select/Select";

import {observer} from "mobx-react-lite";
import classes from './RuchkaDefec.module.css'
import {month,dateFormat} from '../../../utils/date'
import DefecService from "../../../http/service/products/DefecService";
import WorkerService from "../../../http/service/workers/WorkerService";
import {IDefec} from "../../../models/http/IDefec";
import RuchkaService from "../../../http/service/products/RuchkaService";
import MaterialService from "../../../http/service/products/MaterialService";

import {IWorker} from "../../../models/http/IWorker";
import RuchkaDefecInfo from "./RuchkaDefecInfo";
const RuchkaDefec:FC = () => {
    const [series,setSeries] =useState('')
    const [defecVis,setDefecVis] =useState(false)
    const [workerDefecVis,setWorkerDefecVis] =useState(false)
    const [defec,setDefec] =useState<IDefec[]>([{title:'',value:''}])
    const [date,setDate] =useState({month:'',year:''})
    const [workerId,setWorkerId] =useState<string|any>('')
    const [worker,setWorker] =useState<IWorker>({name:'Введите серию и нажмите "брак по серии"'} as IWorker)
    const [fetchWorkerName,setFetchWorkerName] =useState<string>('')
    const [materialListHttp,setMaterialListHttp]=useState(materialList)

 const openWorkerBrak = async (e:any)=>{
        await setFetchWorkerName(e.target.innerHTML)
     if (dateFormat(date.year,date.month).length<10) {
         alert('Введите дату')
         return
     }
         setWorkerDefecVis(true)
 }
 const editTd = (e:any)=>{
        e.preventDefault()
     if (e.target.previousElementSibling ===null||e.target.tagName==='INPUT'||e.target.tagName==='TR') return
     let prevText = e.target.innerHTML
     e.target.innerHTML=''
     let input = document.createElement('input')
     input.className='input'
     input.value=prevText
     e.target.append(input)
     input.focus()
     input.onblur=()=>{
            e.target.innerHTML=input.value
     }
 }
const create =async ()=>{
        let dataDate = dateFormat(date.year,date.month)
        let data:any[] =[];
        let start =   document.getElementsByTagName('tbody')[0].rows
    Array.from(start).forEach(tr=>{
        let ch=tr.children
        if (ch[2].innerHTML===''&& ch[3].innerHTML===''&& ch[4].innerHTML===''&& ch[5].innerHTML===''&& ch[6].innerHTML==='')return;

        data.push({
            title:ch[0].innerHTML,
            series:ch[1].innerHTML,
            value1:ch[2].innerHTML,
            value2:ch[3].innerHTML,
            value3:ch[4].innerHTML,
            value4:ch[5].innerHTML,
            value5:ch[6].innerHTML,
            date:dataDate,
            workerId:workerId
        })
       Array.prototype.forEach.call(ch,function (c,i){ if (i===0) return ;c.innerHTML=''})
        })
        DefecService.ruchkaMatDefec(data).then(data=>alert(`${data.data}`)).catch(()=>console.log('Что-то пошло не так'))

        setMaterialListHttp(materialList)
}
const showInfo=async ()=>{
        try {
            const data = await DefecService.get(series)
            const seriesData = await MaterialService.getMaterial(series)
            const ruchka =await RuchkaService.getOne(series)
            setWorkerId(ruchka.data.workerId)
            const worker =await WorkerService.getOneById(ruchka.data.workerId)
            if (!worker.data) throw new Error()
            setWorker(worker.data)
            let temp = [] as typeof materialList
            materialList.forEach((ml,i)=>temp.push(seriesData.data.filter((sd:any)=>sd.title.toLowerCase()===ml.title.toLowerCase())[0]))
            setMaterialListHttp(temp)
            setDefec(data.data)
            setDefecVis(true)
        }catch (e) {
            alert('Серия не найдена')
            setDefecVis(false);setMaterialListHttp(materialList)
        }

}
    return (
        <div style={{marginLeft:10}}>
            <div className='flex wrap row j-c'>
                <EditButton title={'Рязанцев Антон' } variant={Color.default} func={(e)=>openWorkerBrak(e)} />
                <EditButton title={'Коновалов Сергей'} variant={Color.default} func={(e)=>openWorkerBrak(e)}/>
                <EditButton title={"Емельяненко Дмитрий"} variant={Color.default} func={(e)=>openWorkerBrak(e)}/>
                <EditButton title={"Все"} variant={Color.default} func={(e)=>openWorkerBrak(e)}/>
                {workerDefecVis&&<RuchkaDefecInfo name={fetchWorkerName} date={dateFormat(date.year,date.month)} hide={()=>setWorkerDefecVis(false)} />}
            </div>
            <hr className='m-t-3'/>
          <div className='flex row f-a-c m-t-3 j-c'>
              <div className='m-r-3'>Серия:</div>
              <ModalInput text={'Серия'} change={(e)=>setSeries(e)} type={'text'} value={series}/>
              <div className='m-r-3 m-l-3'>{`Сборщик:${worker.name}`}</div>
          </div>
            <div className='flex row j-c f-a-c m-t-3'>
                    <div className='m-r-3'>Месяц:</div>
                    <Select options={month} change={(e)=>setDate({...date,month:e})}/>
                    <div className='m-r-3 m-l-3'>Год:</div>
                    <ModalInput text={'Год'} change={(e)=>setDate({...date,year:e})} type={'text'} value={date.year}/>

            </div>
            <hr className='m-t-3'/>
            <div className='flex row j-c f-a-c m-t-3'>

                <div>
                    <table>
                    <thead>
                    <tr >
                        <th></th>
                        <th>Серия</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                    </thead>
                    <tbody>
                    {materialListHttp.map((m)=>
                        <tr
                            id={m.title}
                            onClick={(e)=>editTd(e)}
                            className={classes.tr} key={m.title}>
                            <td>{m.title}</td>
                            <td>{m.series}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )}
                    </tbody>


                </table>
                </div>
                <div className='flex column m-l-3'>
                    <div>
                        {defecVis&&<div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Вид</th>
                                    <th>Количество</th>
                                </tr>
                                </thead>
                                <tbody>
                                {defec.map(d=>
                                    <tr key={d.title} className={classes.tr}>
                                        <td>{d.title}</td>
                                        <td>{d.value}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>}
                        <div><EditButton title={'брак по серии'} variant={Color.info} func={showInfo}/></div>
                    </div>
                    <EditButton title={'записать'} variant={Color.success} func={create}/>
                </div>
            </div>
        </div>
    );
};

export default observer(RuchkaDefec) ;