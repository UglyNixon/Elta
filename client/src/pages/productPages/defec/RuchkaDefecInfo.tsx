import React, {FC, useEffect, useState} from 'react';
import {IBrakRuchkaMat} from "../../../models/http/IBrakRuchkaMat";
import DefecService from "../../../http/service/products/DefecService";
import Modalw from "../../../components/UI/modalW/Modalw";
import EditButton, {Color} from "../../../components/UI/buttons/editButton/EditButton";
import ForModal from "../../../components/UI/forModal/ForModal";
import {observer} from "mobx-react-lite";
import classes from './RuchkaDefec.module.css'

interface RuchaDefecInfoProps {
    name:string;
    date:string;
    hide:()=>void
}
const RuchkaDefecInfo:FC<RuchaDefecInfoProps> = ({name,date,hide}) => {
 const [tableData,setTableData]= useState<IBrakRuchkaMat[]>([])
const [load,setLoad]=useState(true)
    useEffect(()=>{
        console.log(name)
        DefecService.fetchMaterialBrak({name,date}).then(data=>setTableData(data.data)).then(()=>setLoad(false))
    },[])
    return (
        <ForModal>
            <Modalw>
            <h3>Брак по серии :</h3>
            <hr className='m-t-3'/>
                {load?<div></div>
                    :
                    <div>
                        <table>
                            <thead>
                            <tr className={classes.tr}>
                                <th>Наименование</th>
                                <th>Серия</th>
                                <th>Общее</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tableData.map(tr => {
                    return tr.seriesArray.map((t,i)=>{

                        return <tr className={classes.tr}>
                            <td>{!i?`${i+1}. ${tr.title} (${tr.value}шт.)`:`${i+1}. ***`}</td>
                            <td>{t.series}</td>
                            <td>{t.val1+t.val2+t.val3+t.val4+t.val5}</td>
                            <td>{t.val1}</td>
                            <td>{t.val2}</td>
                            <td>{t.val3}</td>
                            <td>{t.val4}</td>
                            <td>{t.val5}</td>
                        </tr>
                    })

                                }
                              )
                            }
                            </tbody>
                        </table>
                    </div>}
            <hr className='m-t-3'/>
                <EditButton title={"Закрыть"} variant={Color.delete} func={()=>hide()}/>
            </Modalw>
        </ForModal>
    );
};

export default observer(RuchkaDefecInfo);