import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../types/ingredient';
import Cart from "../cart/cart";

const Ingredients = ({ data }) => {
    return (
        <div className="full-space ml-8 custom-scroll overflow-auto">
            {
                data.map(ingredient => <Cart key={ingredient._id} ingredient={ingredient} />)
            }
        </div>
    );
}

Ingredients.propTypes = {
    data: PropTypes.shape({
        bun: PropTypes.arrayOf(ingredientPropTypes),
        sauce: PropTypes.arrayOf(ingredientPropTypes),
        main: PropTypes.arrayOf(ingredientPropTypes),
    })
};

export default Ingredients;