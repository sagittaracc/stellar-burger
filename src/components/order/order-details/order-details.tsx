import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientList from "../../ingredient-list/ingredient-list";
import styles from './order-details.module.css';
import { FC } from 'react';
import { TOrderComponent } from "../../../types/order";
import OrderStatus from "../order-status/order-status";
import withCost from "../../../hocs/with-cost";

const OrderDetails: FC<TOrderComponent> = withCost(({ order, ingredients, cost }) => {
    return (
        <div className="ml-10 mr-10">
            <p className='text text_type_main-medium mb-1'>{order.name}</p>
            <div className={`text-success text text_type_main-default mb-6`}>
                <OrderStatus status={order.status} />
            </div>
            <p className='text text_type_main-medium mb-6 mt-10'>Состав:</p>
            <div className={`custom-scroll overflow-auto ${styles.details}`}>
                {ingredients && <IngredientList list={ingredients} />}
            </div>
            <div className='mt-10'>
                <span className='text text_type_main-default text_color_inactive'>
                    <FormattedDate date={new Date(order.createdAt)} />
                </span>
                {
                    cost &&
                    <span className='text text_type_digits-medium float-right'>
                        <span className='mr-2'>{cost}</span>
                        <CurrencyIcon type="primary" />
                    </span>
                }
            </div>
        </div>
    );
})

export default OrderDetails;