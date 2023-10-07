import { FC } from 'react';
import { all } from '../../stubs/orders';
import OrderData from '../../components/order/order-data';

const Orders: FC = () => {
    return (
        <div className="custom-scroll full-space overflow-auto pr-3 h-100">
            {all.orders.map(order => <OrderData link='/profile/orders' order={order} preview />)}
        </div>
    );
}

export default Orders;