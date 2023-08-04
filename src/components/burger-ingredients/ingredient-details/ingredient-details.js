import { ingredientPropTypes } from '../../types/ingredient';

const IngredientDetails = ({ ingredient }) => {
    return (
        <div className="text text-center mt-10">
            <div><img src={ingredient.image_large} /></div>
            <div className="mt-4 text_type_main-medium">{ingredient.name}</div>
            <div className="flex ml-10 mr-10 mt-8 text_type_main-default text_color_inactive">
                <div className="col">
                    <p>Калории, ккал</p>
                    <p className="text_type_digits-default">{ingredient.calories}</p>
                </div>
                <div className="col">
                    <p>Белки, г</p>
                    <p className="text_type_digits-default">{ingredient.proteins}</p>
                </div>
                <div className="col">
                    <p>Жиры, г</p>
                    <p className="text_type_digits-default">{ingredient.fat}</p>
                </div>
                <div className="col">
                    <p>Углеводы, г</p>
                    <p className="text_type_digits-default">{ingredient.carbohydrates}</p>
                </div>
            </div>
        </div>
    );
}

IngredientDetails.propTypes = {
    ingredient: ingredientPropTypes.isRequired
};

export default IngredientDetails;