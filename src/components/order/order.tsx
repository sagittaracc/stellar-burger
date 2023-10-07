import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ingredientsSelector } from '../../services/ingredients/selectors';
import { TIngredient } from '../../types/ingredient';
import { TOrderComponent } from '../../types/order';
import OrderPreview from './order-preview/order-preview';
import OrderDetails from './order-details/order-details';

const Order: FC<TOrderComponent> = ({ link = '#', order, preview = false }) => {
    const [,, ingredientList] = useSelector(ingredientsSelector);

    const ingredientsInUse =
        ingredientList.filter(
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
    };

    return (
        <>
            { preview && <OrderPreview link={link} {...orderData} /> }
            { !preview && <OrderDetails {...orderData} /> }
        </>
    );
}

export default Order;