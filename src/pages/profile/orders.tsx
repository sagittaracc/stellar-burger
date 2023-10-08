import { FC } from 'react';
import { all } from '../../stubs/orders';
import withCost from '../../hocs/with-cost';
import OrderPreview from '../../components/order/order-preview/order-preview';

const Orders: FC = () => {
    const OrderPreviewWithCost = withCost(OrderPreview);

    return (
        <div className="custom-scroll full-space overflow-auto pr-3 h-100">
            {all.orders.map(order => <OrderPreviewWithCost link='/profile/orders' order={order} />)}
        </div>
    );
}

export default Orders;