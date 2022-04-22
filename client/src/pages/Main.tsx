import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import MenuCard from "../components/UI/card/MenuCard";
import {JOURNALS_ROUTE, MATERIAL_ROUTE, PLANS_ROUTE, PRODUCT_ROUTE, RUCHKA_ROUTE} from "../utils/consts";


const Main = () => {
    const {userStore}=useContext(Context)

    return (

        <div className='flex f-wrap  m-t-3'>
            <MenuCard title={'Журналы'} text={'Производственные журналы'} path={JOURNALS_ROUTE}/>
            <MenuCard title={'Продукция'} text={'Выпускаемая продукция и полуфабрикаты'} path={PRODUCT_ROUTE}/>
            <MenuCard title={'Планы производства'} text={'Планы выпуска полуфабрикатов и Готовой продукции'} path={PLANS_ROUTE}/>
            <MenuCard title={'Материалы'} text={'Обеспечение материалами производства/ внутренние заказы '} path={MATERIAL_ROUTE}/>
            <MenuCard title={'Материалы'} text={'Обеспечение материалами производства/ внутренние заказы '} path={PRODUCT_ROUTE}/>
        </div>
    );
};

export default Main;