import { FC } from 'react';
import { feed } from '../../stubs/orders';
import CardOrder from '../../components/card-order/card-order';

const Orders: FC = () => {
    return (
        <div className="custom-scroll full-space overflow-auto pr-3 h-100">
            {feed.orders.map(order => <CardOrder {...order} />)}
        </div>
    );
}

export default Orders;