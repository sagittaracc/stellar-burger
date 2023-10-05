import { FC } from 'react';
import { TCardOrderComponent } from '../../../types/feed';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './card-order-details.module.css';

const CardOrderDetails: FC<TCardOrderComponent> = ({ data }) => {
    return (
        <div className="ml-10 mr-10">
            <p className='text text_type_main-medium mb-1'>{data.name}</p>
            <p className={`text-success text text_type_main-default mb-6`}>Готов</p>
            <p className='text text_type_main-medium mb-6 mt-10'>Состав:</p>
            <div className="custom-scroll overflow-auto" style={{ height: 300 }}>
                {
                    data.ingredients.map(
                        ingredient =>
                            <div className='flex align-center'>
                                <div className={`${styles.ingredient} mt-4 mb-4`}>
                                    <img src={ingredient} alt="" />
                                </div>
                                <div className='ml-10 text text_type_main-default'>Соус с шипами Антарианского плоскоходца</div>
                                <div className='text text_type_digits-default ml-10'>
                                    <span className='mr-2 align-top'>{data.price}</span>
                                    <CurrencyIcon type="primary" />
                                </div>
                            </div>
                    )
                }
            </div>
            <div className='mt-10'>
                <span className='text text_type_main-default text_color_inactive'>
                    <FormattedDate date={new Date(data.timestamp)} />
                </span>
                <span className='text text_type_digits-medium float-right'>
                    <span className='mr-2'>{data.price}</span>
                    <CurrencyIcon type="primary" />
                </span>
            </div>
        </div>
    );
}

export default CardOrderDetails;