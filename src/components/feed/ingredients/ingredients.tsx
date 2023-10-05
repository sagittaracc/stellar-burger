import { FC } from 'react';
import styles from './ingredients.module.css';
import { TIngredientsComponent } from '../../../types/feed';

const Ingredients: FC<TIngredientsComponent> = ({ list, maxCount }) => {
    return (
        <>
            {
                list.slice(0, maxCount).map(
                    (img, index) =>
                        <div style={{ zIndex: maxCount - index }} className={`${styles.ingredient}`}>
                            <img src={img} alt="" />
                            {
                                index === maxCount - 1 &&
                                list.length - maxCount > 0 &&
                                    <div className={`${styles.counter} text text_type_main-default`}>+{list.length - maxCount}</div>
                            }
                        </div>
                )
            }
        </>
    );
}

export default Ingredients;