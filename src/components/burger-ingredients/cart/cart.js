import { useDispatch } from 'react-redux';
import { ingredientPropTypes } from '../../types/ingredient';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { openPreview } from '../../../services/ingredients/actions';

const Cart = ({ ingredient }) => {
    const dispath = useDispatch();

    const openModal = () => {
        dispath(openPreview(ingredient));
    };

    return (
        <div onClick={openModal} className="text-center col pt-6 pb-10 pl-4 pr-4 position-relative">
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
    ingredient: ingredientPropTypes.isRequired
}

export default Cart;