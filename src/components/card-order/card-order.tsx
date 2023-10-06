import { FC } from 'react';
import styles from './card-order.module.css'
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from './ingredients/ingredients';
import { IModalHook } from '../../types/modal';
import useModal from '../../hooks/useModal';
import Modal from '../modal/modal';
import CardOrderDetails from '../card-order-details/card-order-details';
import { useSelector } from 'react-redux';
import { ingredientsSelector } from '../../services/ingredients/selectors';
import { TIngredient } from '../../types/ingredient';
import { TOrder } from '../../types/order';

const CardOrder: FC<TOrder> = (order) => {
    const { open: modalShown, openModal, closeModal }: IModalHook = useModal();
    const [, ingredients] = useSelector(ingredientsSelector);
    const ingredientsList = ingredients.bun.concat(ingredients.main).concat(ingredients.sauce);
    const ingredientsInUse = ingredientsList.filter((ingredient: TIngredient) => order.ingredients.includes(ingredient._id as unknown as string));
    const cost = ingredientsInUse.reduce((total: number, ingredient: TIngredient) => total + ingredient.price, 0);

    const getStatus = (statusCode: string) => {
        switch (statusCode) {
            case "done":
                return "Готово";
        }
    };

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
                <p className={`text-success text text_type_main-default mb-6`}>{getStatus(order.status)}</p>
                <div className='flex'>
                    <Ingredients cost={cost} list={ingredientsInUse} maxCount={5} />
                </div>
            </div>
            {
                modalShown &&
                <Modal onClose={closeModal} header={`#${order.number}`}>
                    <CardOrderDetails data={order} list={ingredientsInUse} cost={cost} />
                </Modal>
            }
        </>
    );
}

export default CardOrder;