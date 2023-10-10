import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/api';
import { TAllOrdersResponse } from '../types/response';
import { TOrder } from '../types/order';
import styles from './order.module.css';
import NotFound from './not-found';
import OrderDetails from '../components/order/order-details/order-details';

const Order: FC = () => {
    const { id } = useParams();
    const [order, setOrder] = useState<TOrder | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        get(`/orders/${id}`)
            .then(response => {
                setLoaded(true);
                const orderResponse = response as TAllOrdersResponse;

                if (orderResponse.orders.length === 1) {
                    setOrder(orderResponse.orders[0]);
                }
            });
    }, []);

    return (
        <>
            {
                loaded &&
                <div className={`pt-30 ${styles.order}`}>
                    {order && <OrderDetails order={order} />}
                    {!order && <NotFound />}
                </div>
            }
        </>
    );
}

export default Order;