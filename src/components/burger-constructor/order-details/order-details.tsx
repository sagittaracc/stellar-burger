import styles from './order-details.module.css';
import checkMark from "../../../images/done.png";
import { FC } from 'react';
import { TOrderDetailsComponent } from '../../../types/order';

const OrderDetails: FC<TOrderDetailsComponent> = ({ order }) => {
    return (
        <div className="text text-center">
            <div className={`text_type_digits-large ${styles.number}`}>{order.number}</div>
            <div className="mt-8 text_type_main-medium">идентификатор заказа</div>
            <div className="mt-15"><img src={checkMark} /></div>
            <div className="text_type_main-default mt-15">Ваш заказ начали готовить</div>
            <div className="text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</div>
        </div>
    );
}

export default OrderDetails;