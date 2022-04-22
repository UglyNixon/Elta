import React, {FC} from 'react';
import MenuCard from "../../components/UI/card/MenuCard";
import { RUCHKA_MAIN_ROUTE} from "../../utils/consts";

const Products:FC = () => {
    return (
        <div className='flex f-wrap  m-t-3'>
          <MenuCard title={'Ручка'} text={'Создание. Переделка брака.Брак.Анализ'} path={RUCHKA_MAIN_ROUTE}/>
        </div>
    );
};
export default Products;