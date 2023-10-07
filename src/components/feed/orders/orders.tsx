import { FC } from 'react';
import { TFeed } from '../../../types/feed';
import OrderData from '../../order/order-data';

const Orders: FC<TFeed> = ({ orders }) => {
    return (
        <div className="flex columns text text_type_main-default h-100">
            <h1 className='mb-3'>Лента заказов</h1>
            <div className="custom-scroll full-space overflow-auto pr-3">
                {orders.map(order => <OrderData link='/feed' order={order} preview />)}
            </div>
        </div>
    );
}

export default Orders;