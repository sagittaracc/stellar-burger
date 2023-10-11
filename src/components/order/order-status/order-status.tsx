import { FC } from 'react';
import { TOrderStatusComponent } from "../../../types/order";

const OrderStatus: FC<TOrderStatusComponent> = ({ status }) => {
    return (
        <>
            {status === "done" && <p className={`text-success text text_type_main-default mb-6`}>Готово</p>}
            {status === "pending" && <p className={`text-danger text text_type_main-default mb-6`}>В работе</p>}
        </>
    );
}

export default OrderStatus;