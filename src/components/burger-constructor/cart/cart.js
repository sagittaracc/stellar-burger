import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../types/ingredient';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const Cart = ({ ingredient }) => {
    return (
        <div className="flex align-center pb-4">
            <span className="mr-4"><DragIcon type="primary" /></span>
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
            />
        </div>
    );
}

Cart.propTypes = {
    ingredient: ingredientPropTypes.isRequired
}

export default Cart;