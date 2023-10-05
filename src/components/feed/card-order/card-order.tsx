import { FC } from 'react';
import styles from './card-order.module.css'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../ingredient/ingredient';
import { TCardOrderComponent } from '../../../types/feed';

const CardOrder: FC<TCardOrderComponent> = ({ data }) => {
    const maxVisibleIngredientsCount = 5;

    return (
        <div className={`${styles.card} p-6 mb-4`}>
            <div className='mb-6'>
                <span className='text text_type_digits-default'>#{data.number}</span>
                <span className='float-right text text_type_main-default text_color_inactive'>
                    <FormattedDate date={new Date(data.timestamp)} />
                </span>
            </div>
            <p className='text text_type_main-medium mb-6'>{data.name}</p>
            <p className={`${styles.status} text text_type_main-default mb-6`}>Готов</p>
            <div className='flex'>
                {
                    data.ingredients.slice(0, maxVisibleIngredientsCount).map(
                        (img, index, list) =>
                            <Ingredient
                                rest={data.ingredients.length - maxVisibleIngredientsCount}
                                index={index}
                                list={list}
                                img={img}
                            />
                    )
                }
                <div className='col'>
                    <p className='text text_type_digits-medium float-right mt-3'>
                        <span className='mr-2'>{data.price}</span>
                        <CurrencyIcon type="primary" />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardOrder;