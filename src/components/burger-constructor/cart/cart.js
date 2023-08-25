import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../types/ingredient';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { delIngredient } from '../../../services/constructor/actions';

const Cart = ({ ingredient }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(delIngredient(ingredient.id));
    }

    return (
        <div className="flex align-center pb-4">
            <span className="mr-4"><DragIcon type="primary" /></span>
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={handleClose}
            />
        </div>
    );
}

Cart.propTypes = {
    ingredient: ingredientPropTypes.isRequired
}

export default Cart;