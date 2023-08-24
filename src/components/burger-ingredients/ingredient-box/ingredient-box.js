import Cart from "../cart/cart";
import PropTypes from 'prop-types';
import { ingredientPropTypes } from "../../types/ingredient";

const IngredientBox = ({tab, title, data, category}) => {
    return (
        <div ref={tab}>
            <h1 className="text-left pt-10">{title}</h1>
            <div className="flex wrap pr-7">
                {
                    data[category].map(ingredient => <Cart key={ingredient._id} ingredient={ingredient} />)
                }
            </div>
        </div>
    )
}

IngredientBox.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    data: PropTypes.shape({
        bun: PropTypes.arrayOf(ingredientPropTypes),
        sauce: PropTypes.arrayOf(ingredientPropTypes),
        main: PropTypes.arrayOf(ingredientPropTypes),
    })
};

export default IngredientBox;