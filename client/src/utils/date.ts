
export const month=[
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]
export const dateFormat = (year:string,month:string) =>{
    let nMonth=''
            switch (month){
                case  'Январь':
                   nMonth = '01'
                    break;
                case   'Февраль':
                    nMonth= '02'
                    break;
                case      'Март':
                    nMonth= `03`
                    break;
                case       'Апрель':
                    nMonth= `04`
                    break;
                case      'Май':
                    nMonth= `05`
                    break;
                case      'Июнь':
                    nMonth= `06`
                    break;
                case     'Июль':
                    nMonth= `07`
                    break;
                case     'Август':
                    nMonth= `08`
                    break;
                case     'Сентябрь':
                    nMonth= `09`
                    break;
                case     'Октябрь':
                    nMonth= `10`
                    break;
                case     'Ноябрь':
                    nMonth= `11`
                    break;
                case     'Декабрь':
                    nMonth= `12`
                    break;
            }
            return `${year}-${nMonth}-01`


}