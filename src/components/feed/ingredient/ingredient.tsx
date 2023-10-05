import { FC } from 'react';
import styles from './ingredient.module.css';
import { TIngredientComponent } from '../../../types/feed';

const Ingredient: FC<TIngredientComponent> = ({rest, index, list, img}) => {
    const zIndex = list.length - index;
    const last = index + 1 === list.length;

    return (
        <div style={{ zIndex }} className={`${styles.ingredient}`}>
            <img src={img} alt="" />
            {last && rest > 0 && <div className={`${styles.counter} text text_type_main-default`}>+{rest}</div>}
        </div>
    );
}

export default Ingredient;