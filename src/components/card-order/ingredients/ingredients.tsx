import { FC } from 'react';
import styles from './ingredients.module.css';
import { TIngredient, TIngredientListComponent } from '../../../types/ingredient';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Ingredients: FC<TIngredientListComponent> = ({ list, maxCount = null }) => {
    const isLast = (index: number) => maxCount ? index === maxCount - 1 : false;
    const hasMore = () => maxCount ? list.length - maxCount > 0 : false;
    const getRestCount = () => maxCount ? list.length - maxCount : 0;

    return (
        <>
            {
                maxCount &&
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
            {
                !maxCount &&
                list.map(
                    ingredient =>
                        <div className='flex align-center space-between pr-5'>
                            <div className='flex align-center'>
                                <div className={`${styles.ingredient} mt-4 mb-4`}>
                                    <img src={ingredient.image} alt="" />
                                </div>
                                <div className='ml-7 text text_type_main-default'>{ingredient.name}</div>
                            </div>
                            <div className='text text_type_digits-default ml-10'>
                                <span className='mr-2 align-top'>{ingredient.price}</span>
                                <CurrencyIcon type="primary" />
                            </div>
                        </div>
                )
            }
        </>
    );
}

export default Ingredients;