import React, {FC, useState} from 'react';
import Modalw from "../../UI/modalW/Modalw";
import {HideProps, IDefec} from "../../../models/interfaces/interfaces";
import EditButton, {Color} from "../../UI/buttons/editButton/EditButton";
import Select from "../../UI/select/Select";
import {defecList} from '../../../utils/RuchkaDefecList'
import classes from './RuchkaBrak.module.css'
import ModalInput from "../../UI/input/ModalInput";
import DefecService from "../../../http/service/products/DefecService";

const RuchkaBrak:FC<HideProps> = ({hide}) => {
    const [defec,setDefec]=useState<IDefec[]>([])
    const [series,setSeries] =useState('')
    const addDefec= ()=>{
        setDefec([...defec,{title:'',value:'',number: Date.now()}])
    }
    const deleteDefec =(d:IDefec) =>{
        setDefec(defec.filter(c => c.number !== d.number))
    }
    const changeDefecTitle =(e:string,d:any)=>{
        setDefec(defec.map(a=>a.number===d.number?{...a,title:e}:a))
    }
    const changeDefecValue =(e:string,d:any) =>{
        setDefec(defec.map(a=>a.number===d.number?{...a,value:e}:a))
    }
    const create = async () =>{

       await DefecService.create({series:series,defec:JSON.stringify(defec)})
    }

    return (
        <div >
                <Modalw>

                      <h3>Брак по серии :</h3>
                    <hr className='m-t-3'/>
                    <div style={{marginTop:10}} >
                        <div>
                            <div>Серия:</div>
                            <div className='flex j-c'><ModalInput text={'Серия'}  change={(e)=>setSeries(e)} type={'text'} value={series}/></div>
                        </div>
                        {defec.map((d,i)=>
                            <div className={classes.imp_group}>
                                <div>
                                    {`${i+1})`}
                                </div>
                                <div>
                                    <Select  data={d} options={defecList.map(i=>i.title)} change={(e,d)=>changeDefecTitle(e,d)} />
                                </div>
                                <div>
                                    <ModalInput data={d} text={'кол-во'} change={(e,d)=>changeDefecValue(e,d)} type={'text'} value={d.value}/>
                                </div>
                                <EditButton title={'Х'} variant={Color.delete} forList={true} func={()=>deleteDefec(d)}/>
                            </div>
                        )}
                    </div>
                    <div className='flex column f-a-c'>
                        <EditButton title={'Добавить вид брака'} variant={Color.success} func={addDefec}/>
                    </div>
                     <hr className='m-t-2'/>
                    <div className='flex row j-c'>
                        <EditButton title={'Записать'} variant={Color.success} func={create}/>
                        <EditButton title={'Закрыть'} variant={Color.delete} func={hide}/>
                    </div>


                </Modalw>

        </div>
    );
};

export default RuchkaBrak;