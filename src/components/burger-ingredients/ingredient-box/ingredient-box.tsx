import Cart from "../cart/cart";
import { TIngredientBoxComponent } from "../../../types/ingredient";
import { FC, Key } from 'react';

const IngredientBox: FC<TIngredientBoxComponent> = ({tab, title, data, category}) => {
    return (
        <div ref={tab}>
            <h1 className="text-left pt-10">{title}</h1>
            <div className="flex wrap pr-7">
                {
                    data[category].map(ingredient => <Cart key={ingredient._id as unknown as Key} ingredient={ingredient} />)
                }
            </div>
        </div>
    )
}

export default IngredientBox;