import { useSelector } from "react-redux";
import { TOrderComponent } from "../types/order";
import { getIngredientListSelector } from "../services/ingredients/selectors";
import { TIngredient } from "../types/ingredient";

const withCost = (OrderComponent: React.FC<TOrderComponent>) => ({order, link = '#'}: TOrderComponent) => {
    const ingredientList = useSelector(getIngredientListSelector);

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

    return (
        <OrderComponent link={link} order={order} cost={cost} ingredients={ingredientsInUse} />
    );
};

export default withCost;