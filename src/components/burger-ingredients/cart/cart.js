import { useDispatch, useSelector } from 'react-redux';
import { ingredientPropTypes } from '../../types/ingredient';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { openPreview } from '../../../services/ingredients/actions';
import { useDrag } from 'react-dnd';
import { getIngredientCounts } from '../../../services/ingredients/selectors';

const Cart = ({ ingredient }) => {
    const ingredientCounts = useSelector(getIngredientCounts);
    const count = ingredientCounts[ingredient._id];

    const dispath = useDispatch();

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: ingredient
    });

    const openModal = () => {
        dispath(openPreview(ingredient));
    };

    return (
        <div onClick={openModal} className="text-center col pt-10 pb-10 pl-4 pr-4 position-relative">
            <img ref={dragRef} src={ingredient.image} />
            {
                count &&
                <Counter count={count} size="default" extraClass="m-1" />
            }
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