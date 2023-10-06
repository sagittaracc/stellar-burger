import { FC } from 'react';
import CardOrder from '../../card-order/card-order';
import { TOrder } from '../../../types/order';

type TOrderComponent = {
    orders: Array<TOrder>,
};

const Orders: FC<TOrderComponent> = ({ orders }) => {
    return (
        <div className="flex columns text text_type_main-default h-100">
            <h1 className='mb-3'>Лента заказов</h1>
            <div className="custom-scroll full-space overflow-auto pr-3">
                {orders.map(order => <CardOrder {...order} />)}
            </div>
        </div>
    );
}

export default Orders;