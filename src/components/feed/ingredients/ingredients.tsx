import { FC } from 'react';
import styles from './ingredients.module.css';
import { TIngredientsComponent } from '../../../types/feed';

const Ingredients: FC<TIngredientsComponent> = ({ list, maxCount }) => {
    const isLast = (index: number) => index === maxCount - 1;
    const hasMore = () => list.length - maxCount > 0;
    const getRestCount = () => list.length - maxCount;

    return (
        <>
            {
                list.slice(0, maxCount).map(
                    (img, index) =>
                        <div style={{ zIndex: maxCount - index }} className={`${styles.ingredient}`}>
                            <img src={img} alt="" />
                            {
                                isLast(index) && hasMore() &&
                                    <div className={`${styles.counter} text text_type_main-default`}>+{getRestCount()}</div>
                            }
                        </div>
                )
            }
        </>
    );
}

export default Ingredients;