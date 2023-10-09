import { FC } from 'react';
import withCost from '../../../hocs/with-cost';
import OrderPreview from '../../order/order-preview/order-preview';
import { useSelector } from 'react-redux';
import { getOrderListSelector } from '../../../services/ws/selectors';
import { TOrder } from '../../../types/order';

const Orders: FC = () => {
    const OrderPreviewWithCost = withCost(OrderPreview);
    const orders = useSelector(getOrderListSelector) as unknown as Array<TOrder>;

    return (
        <div className="flex columns text text_type_main-default h-100">
            <h1 className='mb-3'>Лента заказов</h1>
            <div className="custom-scroll full-space overflow-auto pr-3">
                {orders.map(order => <OrderPreviewWithCost link='/feed' order={order} />)}
            </div>
        </div>
    );
}

export default Orders;