import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { delIngredient, moveIngredient } from '../../../services/constructor/actions';
import { useDrag, useDrop } from 'react-dnd';
import styles from './cart.module.css';
import { TCartComponent, TIngredient } from '../../../types/ingredient';
import { FC } from 'react';

const Cart: FC<TCartComponent> = ({ ingredient }) => {
    const dispatch = useDispatch();

    const [{isDragging}, dragRef] = useDrag({
        type: "constructor-ingredient",
        item: ingredient,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [, dropTarget] = useDrop({
        accept: "constructor-ingredient",
        hover: (ingredientOne: TIngredient) => {
            const ingredientTwo = ingredient;
            dispatch(moveIngredient(ingredientOne.id, ingredientTwo.id));
        }
    })

    const handleClose = () => {
        dispatch(delIngredient(ingredient.id));
    }

    return (
        <div ref={dragRef} className={`flex align-center pb-4 ${styles.cart}`}>
            {
                !isDragging &&
                <>
                    <span className="mr-4"><DragIcon type="primary" /></span>
                    <div ref={dropTarget} className="w-100">
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                            handleClose={handleClose}
                        />
                    </div>
                </>
            }
        </div>
    );
}

export default Cart;