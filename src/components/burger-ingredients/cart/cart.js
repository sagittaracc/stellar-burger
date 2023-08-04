import { ingredientPropTypes } from '../../types/ingredient';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const Cart = ({ onClick, ingredient }) => {
    return (
        <div onClick={() => onClick(ingredient)} className="text-center col pt-6 pb-10 pl-4 pr-4 position-relative">
            <Counter count={1} size="default" extraClass="m-4" />
            <img src={ingredient.image} />
            <div>
                <span className="mr-2 align-top text_type_main-medium">{ingredient.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div>{ingredient.name}</div>
        </div>
    );
}

Cart.propTypes = {
    onClick: PropTypes.func,
    ingredient: ingredientPropTypes.isRequired
}

export default Cart;