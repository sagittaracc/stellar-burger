import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getData } from '../services/ingredients/selectors';
import IngredientDetails from '../components/burger-ingredients/ingredient-details/ingredient-details';

const Ingredient = () => {
    const { id } = useParams();
    const ingredients = useSelector(getData);

    const getIngredient = (_id) => {
        const ingredient =
            ingredients.bun
                .concat(ingredients.main)
                .concat(ingredients.sauce)
                .filter(ingredient => ingredient._id === _id);

        return ingredient.length === 1 ? ingredient[0] : null;
    }

    return (
        <IngredientDetails ingredient={getIngredient(id)} />
    );
}

export default Ingredient;