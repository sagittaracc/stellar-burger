import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIngredientListSelector } from '../services/ingredients/selectors';
import IngredientDetails from '../components/burger-ingredients/ingredient-details/ingredient-details';
import { FC } from 'react';
import { TIngredientId } from '../types/ingredient';

const Ingredient: FC = () => {
    const { id } = useParams();
    const ingredients = useSelector(getIngredientListSelector);
    const data =
        ingredients
            .filter(ingredient => ingredient._id === id as unknown as TIngredientId);

    const ingredient = data.length === 1 ? data[0] : null;

    return (
        <>
            {
                ingredient && <IngredientDetails ingredient={ingredient} />
            }
        </>
    );
}

export default Ingredient;