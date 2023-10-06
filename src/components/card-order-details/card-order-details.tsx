import { FC } from 'react';
import { TCardOrderDetailsComponent } from '../../types/feed';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './card-order-details.module.css';
import Ingredients from '../card-order/ingredients/ingredients';

const CardOrderDetails: FC<TCardOrderDetailsComponent> = ({ data, list, cost }) => {
    return (
        <div className="ml-10 mr-10">
            <p className='text text_type_main-medium mb-1'>{data.name}</p>
            <p className={`text-success text text_type_main-default mb-6`}>Готов</p>
            <p className='text text_type_main-medium mb-6 mt-10'>Состав:</p>
            <div className={`custom-scroll overflow-auto ${styles.details}`}>
                <Ingredients list={list} />
            </div>
            <div className='mt-10'>
                <span className='text text_type_main-default text_color_inactive'>
                    <FormattedDate date={new Date(data.createdAt)} />
                </span>
                <span className='text text_type_digits-medium float-right'>
                    <span className='mr-2'>{cost}</span>
                    <CurrencyIcon type="primary" />
                </span>
            </div>
        </div>
    );
}

export default CardOrderDetails;