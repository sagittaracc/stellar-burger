import { useSelector } from 'react-redux';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { getIngredientCounts } from '../../../services/ingredients/selectors';
import { Link, useLocation } from 'react-router-dom';
import styles from './cart.module.css';
import { FC } from 'react';
import { TCartComponent } from '../../../types/ingredient';
import { THashMap } from '../../../types';

const Cart: FC<TCartComponent> = ({ ingredient }) => {
    const location = useLocation();
    const id = ingredient._id as unknown as number;
    const ingredientCounts: THashMap<number> = useSelector(getIngredientCounts);
    const count = ingredientCounts ? ingredientCounts[id] : 0;

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: ingredient
    });

    return (
        <Link to={`/ingredients/${ingredient._id}`} state={{background: location}} className={`${styles.cart} text-decoration-none text-center col pt-10 pb-10 pl-4 pr-4 position-relative`}>
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
        </Link>
    );
}

export default Cart;