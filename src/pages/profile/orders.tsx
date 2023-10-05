import { FC } from 'react';
import { orders, feed } from '../../stubs/orders';
import CardOrder from '../../components/feed/card-order/card-order';

const Orders: FC = () => {
    return (
        <div className="custom-scroll full-space overflow-auto pr-3 h-100">
            {feed.orders.map(order => <CardOrder data={order} />)}
        </div>
    );
}

export default Orders;