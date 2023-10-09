import { FC, useEffect } from 'react';
import { all } from '../../stubs/orders';
import withCost from '../../hocs/with-cost';
import OrderPreview from '../../components/order/order-preview/order-preview';
import { useDispatch, useSelector } from 'react-redux';
import { CONNECTION_START } from '../../services/profile-orders/actions';
import { getData } from '../../services/profile-orders/selectors';
import { TOrder } from '../../types/order';

const Orders: FC = () => {
    const OrderPreviewWithCost = withCost(OrderPreview);
    const dispatch = useDispatch<any>();
    const [loaded, allList] = useSelector(getData);
    const all = allList as Array<TOrder>;

    useEffect(() => {
        dispatch({ type: CONNECTION_START });
    }, []);

    return (
        <>
            {
                loaded &&
                <div className="custom-scroll full-space overflow-auto pr-3 h-100">
                    {all.map(order => <OrderPreviewWithCost link='/profile/orders' order={order} />)}
                </div>
            }
        </>
    );
}

export default Orders;