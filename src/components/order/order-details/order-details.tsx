import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientList from "../../ingredient-list/ingredient-list";
import styles from './order-details.module.css';
import { FC } from 'react';
import { TOrderDetailsComponent } from "../../../types/order";
import OrderStatus from "../order-status/order-status";

const OrderDetails: FC<TOrderDetailsComponent> = ({ order, ingredients, cost }) => {
    return (
        <div className="ml-10 mr-10">
            <p className='text text_type_main-medium mb-1'>{order.name}</p>
            <p className={`text-success text text_type_main-default mb-6`}>
                <OrderStatus status={order.status} />
            </p>
            <p className='text text_type_main-medium mb-6 mt-10'>Состав:</p>
            <div className={`custom-scroll overflow-auto ${styles.details}`}>
                <IngredientList list={ingredients} />
            </div>
            <div className='mt-10'>
                <span className='text text_type_main-default text_color_inactive'>
                    <FormattedDate date={new Date(order.createdAt)} />
                </span>
                <span className='text text_type_digits-medium float-right'>
                    <span className='mr-2'>{cost}</span>
                    <CurrencyIcon type="primary" />
                </span>
            </div>
        </div>
    );
}

export default OrderDetails;