import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ingredientsSelector } from '../../services/ingredients/selectors';
import { TIngredient } from '../../types/ingredient';
import { TOrderComponent } from '../../types/order';
import OrderStatus from './order-status/order-status';
import OrderPreview from './order-preview/order-preview';
import OrderDetails from './order-details/order-details';

const Order: FC<TOrderComponent> = ({ order, preview = false }) => {
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

    const orderData = {
        order: order,
        ingredients: ingredientsInUse,
        cost: cost,
        status: <OrderStatus status={order.status} />,
    };

    return (
        <>
            { preview && <OrderPreview {...orderData} /> }
            { !preview && <OrderDetails {...orderData} /> }
        </>
    );
}

export default Order;