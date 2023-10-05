import { FC } from 'react';
import CardOrder from '../card-order/card-order';

const Orders: FC = () => {
    const ordersStub = [
        {
            number: "034535",
            timestamp: "2023-10-04T08:33:32.877Z",
            name: "Death Star Starship Main бургер",
            price: 480,
        },
        {
            number: "034535",
            timestamp: "2023-10-04T08:33:32.877Z",
            name: "Death Star Starship Main бургер",
            price: 480,
        },
        {
            number: "034535",
            timestamp: "2023-10-04T08:33:32.877Z",
            name: "Death Star Starship Main бургер",
            price: 480,
        },
        {
            number: "034535",
            timestamp: "2023-10-04T08:33:32.877Z",
            name: "Death Star Starship Main бургер",
            price: 480,
        },
    ];

    return (
        <div className="flex columns text text_type_main-default h-100">
            <h1>Лента заказов</h1>
            <div className="custom-scroll full-space overflow-auto">
                {ordersStub.map(order => <CardOrder data={order} />)}
            </div>
        </div>
    );
}

export default Orders;