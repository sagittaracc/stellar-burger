import { FC } from 'react';
import styles from './ingredient.module.css';

type TIngredientComponent = {
    index: number;
    img: string;
    list: Array<string>;
};

const Ingredient: FC<TIngredientComponent> = ({index, list, img}) => {
    return (
        <div style={{ zIndex: list.length - index }} className={`${styles.ingredient}`}>
            <img src={img} alt="" />
            {index > 3 && index + 1 === list.length && <div className={`${styles.counter} text text_type_main-default`}>+2</div>}
        </div>
    );
}

export default Ingredient;