import { FC } from 'react';
import styles from './order-preview.module.css';
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientList from "../../ingredient-list/ingredient-list";
import { TOrderComponent } from "../../../types/order";
import OrderStatus from '../order-status/order-status';
import { Link, useLocation } from 'react-router-dom';

const OrderPreview: FC<TOrderComponent> = ({ link, order, ingredients, cost }) => {
    const location = useLocation();

    return (
        <Link to={`${link}/${order._id}`} state={{background: location, foreground: order}} className='text-decoration-none'>
            <div className={`${styles.card} p-6 mb-4`}>
                <div className='mb-6'>
                    <span className='text text_type_digits-default'>#{order.number}</span>
                    <span className='float-right text text_type_main-default text_color_inactive'>
                        <FormattedDate date={new Date(order.createdAt)} />
                    </span>
                </div>
                <p className='text text_type_main-medium mb-6'>{order.name}</p>
                <OrderStatus status={order.status} />
                <div className='flex'>
                    {ingredients && <IngredientList list={ingredients} maxCount={5} />}
                    {
                        cost &&
                        <div className='col'>
                            <p className='text text_type_digits-medium float-right mt-3'>
                                <span className='mr-2'>{cost}</span>
                                <CurrencyIcon type="primary" />
                            </p>
                        </div>
                    }
                </div>
            </div>
        </Link>
    );
}

export default OrderPreview;