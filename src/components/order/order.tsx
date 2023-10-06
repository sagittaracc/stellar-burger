import { FC } from 'react';
import styles from './order.module.css'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { IModalHook } from '../../types/modal';
import useModal from '../../hooks/useModal';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useSelector } from 'react-redux';
import { ingredientsSelector } from '../../services/ingredients/selectors';
import { TIngredient } from '../../types/ingredient';
import { TOrder, TOrderStatusComponent } from '../../types/order';
import IngredientList from '../ingredient-list/ingredient-list';

const OrderStatus: FC<TOrderStatusComponent> = ({ status }) => {
    return (
        <>
            {status === "done" && <p className={`text-success text text_type_main-default mb-6`}>Готово</p>}
            {status === "pending" && <p className={`text-danger text text_type_main-default mb-6`}>В работе</p>}
        </>
    );
}

const Order: FC<TOrder> = (order) => {
    const {
        open: modalShown,
        openModal,
        closeModal
    }: IModalHook = useModal();

    const [, ingredients] = useSelector(ingredientsSelector);

    const ingredientsList =
        ingredients.bun
            .concat(ingredients.main)
            .concat(ingredients.sauce);

    const ingredientsInUse =
        ingredientsList.filter(
            (ingredient: TIngredient) =>
                order.ingredients.includes(ingredient._id as unknown as string)
        );

    const cost =
        ingredientsInUse.reduce(
            (total: number, ingredient: TIngredient) =>
                total + ingredient.price, 0
        );

    return (
        <>
            <div onClick={openModal} className={`${styles.card} p-6 mb-4`}>
                <div className='mb-6'>
                    <span className='text text_type_digits-default'>#{order.number}</span>
                    <span className='float-right text text_type_main-default text_color_inactive'>
                        <FormattedDate date={new Date(order.createdAt)} />
                    </span>
                </div>
                <p className='text text_type_main-medium mb-6'>{order.name}</p>
                <OrderStatus status={order.status} />
                <div className='flex'>
                    <IngredientList list={ingredientsInUse} maxCount={5} />
                    <div className='col'>
                        <p className='text text_type_digits-medium float-right mt-3'>
                            <span className='mr-2'>{cost}</span>
                            <CurrencyIcon type="primary" />
                        </p>
                    </div>
                </div>
            </div>
            {
                modalShown &&
                <Modal onClose={closeModal} header={`#${order.number}`}>
                    <OrderDetails
                        order={order}
                        ingredients={ingredientsInUse}
                        cost={cost}
                        status={<OrderStatus status={order.status} />}
                    />
                </Modal>
            }
        </>
    );
}

export default Order;