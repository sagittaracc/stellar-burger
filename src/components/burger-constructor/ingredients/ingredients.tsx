import Cart from "../cart/cart";
import { FC, Key } from 'react';
import { TIngredientComponent } from '../../../types/ingredient';

const Ingredients: FC<TIngredientComponent> = ({ data, bun }) => {
    return (
        <div className="full-space ml-8 custom-scroll overflow-auto pr-3">
            {
                bun && data.length === 0 &&
                    <div className='h-100 flex align-center justify-center'>
                        <p>Перетащите сюда ингредиенты</p>
                    </div>
            }
            {
                data.map(ingredient => <Cart key={ingredient.id as unknown as Key} ingredient={ingredient} />)
            }
        </div>
    );
}

export default Ingredients;