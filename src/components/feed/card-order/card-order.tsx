import { FC } from 'react';
import styles from './card-order.module.css'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';

type TCardOrder = {
    data: {
        number: string,
        timestamp: string,
        name: string,
        price: number,
    }
};

const CardOrder: FC<TCardOrder> = ({ data }) => {
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
                <div style={{zIndex: 5}} className={`${styles.tmp}`}>
                    <img src={`https://code.s3.yandex.net/react/code/bun-02.png`} alt="" />
                </div>
                <div style={{zIndex: 4}} className={`${styles.tmp}`}>
                    <img src={`https://code.s3.yandex.net/react/code/sauce-04.png`} alt="" />
                </div>
                <div style={{zIndex: 3}} className={`${styles.tmp}`}>
                    <img src={`https://code.s3.yandex.net/react/code/sauce-03.png`} alt="" />
                </div>
                <div style={{zIndex: 2}} className={`${styles.tmp}`}>
                    <img src={`https://code.s3.yandex.net/react/code/sauce-01.png`} alt="" />
                </div>
                <div style={{zIndex: 1}} className={`${styles.tmp}`}>
                    <img src={`https://code.s3.yandex.net/react/code/sauce-01.png`} alt="" />
                    <div className={`${styles.counter} text text_type_main-default`}>+2</div>
                </div>
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