import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../types/ingredient';
import Cart from "../cart/cart";

const Ingredients = ({ data, bun }) => {
    return (
        <div className="full-space ml-8 custom-scroll overflow-auto">
            {
                bun && data.length === 0 &&
                    <div className='h-100 flex align-center justify-center'>
                        <p>Перетащите сюда ингредиенты</p>
                    </div>
            }
            {
                data.map(ingredient => <Cart key={ingredient.id} ingredient={ingredient} />)
            }
        </div>
    );
}

Ingredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropTypes)
};

export default Ingredients;