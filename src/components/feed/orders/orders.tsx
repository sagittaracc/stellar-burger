import { FC } from 'react';
import { TFeed } from '../../../types/feed';
import Order from '../../order/order';

const Orders: FC<TFeed> = ({ orders }) => {
    return (
        <div className="flex columns text text_type_main-default h-100">
            <h1 className='mb-3'>Лента заказов</h1>
            <div className="custom-scroll full-space overflow-auto pr-3">
                {orders.map(order => <Order order={order} preview />)}
            </div>
        </div>
    );
}

export default Orders;