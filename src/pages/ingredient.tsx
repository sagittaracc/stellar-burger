import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getData } from '../services/ingredients/selectors';
import IngredientDetails from '../components/burger-ingredients/ingredient-details/ingredient-details';
import { FC } from 'react';
import { TIngredientGroup, TIngredientId } from '../types/ingredient';

const Ingredient: FC = () => {
    const { id } = useParams();
    const ingredients: TIngredientGroup = useSelector(getData);
    const data =
        ingredients.bun
            .concat(ingredients.main)
            .concat(ingredients.sauce)
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