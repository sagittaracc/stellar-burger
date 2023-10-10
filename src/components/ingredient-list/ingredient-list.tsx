import { FC } from 'react';
import styles from './ingredient-list.module.css';
import { TIngredient, TIngredientListComponent } from '../../types/ingredient';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientList: FC<TIngredientListComponent> = ({ list, maxCount }) => {
    return (
        <>
            { maxCount && <ShortList list={list} maxCount={maxCount} /> }
            { !maxCount && <FullList list={list} /> }
        </>
    );
}

const ShortList: FC<TIngredientListComponent> = ({ list, maxCount }) => {
    const isLast = (index: number) => maxCount ? index === maxCount - 1 : false;
    const hasMore = () => maxCount ? list.length - maxCount > 0 : false;
    const getRestCount = () => maxCount ? list.length - maxCount : 0;

    return (
        <>
            {
                list.slice(0, maxCount).map(
                    (ingredient: TIngredient, index: number) =>
                        <div key={ingredient._id as unknown as string} style={{ zIndex: maxCount ? maxCount - index : 0 }} className={`${styles.ingredient}`}>
                            <img src={ingredient.image} alt="" />
                            {
                                isLast(index) && hasMore() &&
                                <div className={`${styles.counter} text text_type_main-default`}>+{getRestCount()}</div>
                            }
                        </div>
                )
            }
        </>
    );
};

const FullList: FC<TIngredientListComponent> = ({ list }) => {
    return (
        <>
            {
                list.map(
                    ingredient =>
                        <div key={ingredient._id as unknown as string} className='flex align-center space-between pr-5'>
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

export default IngredientList;