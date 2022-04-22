import React from 'react';
import MenuCard from "../../../components/UI/card/MenuCard";
import {RUCHKA_DEFEC_ROUTE, RUCHKA_REWORK, RUCHKA_ROUTE} from "../../../utils/consts";

const RuchkaMain = () => {
    return (

            <div className='flex f-wrap  m-t-3'>
                <MenuCard title={'Ручка'} text={'Создать серию. \n Редактировать. \n Вид несоответствия. \nАнализ брака.'} path={RUCHKA_ROUTE}/>
                <MenuCard title={'Переделка брака'} text={'Сделать запись / внести изменения'} path={RUCHKA_REWORK}/>
                <MenuCard title={'Брак'} text={"Ручки"} path={RUCHKA_DEFEC_ROUTE}/>
            </div>

    );
};

export default RuchkaMain;