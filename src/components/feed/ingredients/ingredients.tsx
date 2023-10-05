import { FC } from 'react';
import styles from './ingredients.module.css';
import { TIngredientsComponent } from '../../../types/feed';
import { TIngredient } from '../../../types/ingredient';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Ingredients: FC<TIngredientsComponent> = ({ list, maxCount, cost }) => {
    const isLast = (index: number) => index === maxCount - 1;
    const hasMore = () => list.length - maxCount > 0;
    const getRestCount = () => list.length - maxCount;

    return (
        <>
            {
                list.slice(0, maxCount).map(
                    (ingredient: TIngredient, index: number) =>
                        <div style={{ zIndex: maxCount - index }} className={`${styles.ingredient}`}>
                            <img src={ingredient.image} alt="" />
                            {
                                isLast(index) && hasMore() &&
                                    <div className={`${styles.counter} text text_type_main-default`}>+{getRestCount()}</div>
                            }
                        </div>
                )
            }
            <div className='col'>
                <p className='text text_type_digits-medium float-right mt-3'>
                    <span className='mr-2'>{cost}</span>
                    <CurrencyIcon type="primary" />
                </p>
            </div>
        </>
    );
}

export default Ingredients;