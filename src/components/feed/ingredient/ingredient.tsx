import { FC } from 'react';
import styles from './ingredient.module.css';

type TIngredientComponent = {
    index: number;
    last: boolean;
    img: string;
};

const Ingredient: FC<TIngredientComponent> = ({index, img, last}) => {
    return (
        <div style={{ zIndex: 100 - index }} className={`${styles.ingredient}`}>
            <img src={img} alt="" />
            {last && <div className={`${styles.counter} text text_type_main-default`}>+2</div>}
        </div>
    );
}

export default Ingredient;