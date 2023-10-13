import { FC, useEffect } from 'react';
import withCost from '../../hocs/with-cost';
import OrderPreview from '../../components/order/order-preview/order-preview';
import { useSelector } from 'react-redux';
import { CONNECTION_CLOSE, CONNECTION_START } from '../../services/profile-orders/actions';
import { getProfileOrders, profileOrdersLoadedSelector } from '../../services/profile-orders/selectors';
import { useDispatch } from '../../types';

const Orders: FC = () => {
    const OrderPreviewWithCost = withCost(OrderPreview);
    const dispatch = useDispatch();
    const data = useSelector(getProfileOrders);
    const loaded = useSelector(profileOrdersLoadedSelector);

    useEffect(() => {
        dispatch({ type: CONNECTION_START });
        return () => { dispatch({ type: CONNECTION_CLOSE }) };
    }, []);

    return (
        <>
            {
                loaded &&
                <div className="custom-scroll full-space overflow-auto pr-3 h-100">
                    {data?.orders.map(order => <OrderPreviewWithCost key={order._id} link='/profile/orders' order={order} />)}
                </div>
            }
        </>
    );
}

export default Orders;