import { FC } from 'react';
import { feed } from '../../stubs/orders';
import Order from '../../components/order/order';

const Orders: FC = () => {
    return (
        <div className="custom-scroll full-space overflow-auto pr-3 h-100">
            {feed.orders.map(order => <Order {...order} />)}
        </div>
    );
}

export default Orders;