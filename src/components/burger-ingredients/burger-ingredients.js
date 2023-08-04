import React from "react";
import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../types/ingredient";
import Cart from "./cart/cart";



const BurgerIngredients = ({ data }) => {
    const [tab, setTab] = React.useState('bun');
    const categories = [
        { name: "bun", caption: "Булки" },
        { name: "sauce", caption: "Соусы" },
        { name: "main", caption: "Начинки" },
    ];

    return (
        <div className="flex columns text text_type_main-default h-100">
            <h1>Соберите бургер</h1>

            <div className="flex">
                <Tab value="bun" active={tab === 'bun'} onClick={setTab}>
                    Булки
                </Tab>
                <Tab value="sauce" active={tab === 'sauce'} onClick={setTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={tab === 'main'} onClick={setTab}>
                    Начинки
                </Tab>
            </div>

            <div className="custom-scroll full-space overflow-auto">
                {categories.map(
                    category =>
                        <React.Fragment key={category.name}>
                            <h1 className="text-left pt-10">{category.caption}</h1>
                            <div className="flex wrap pr-7">
                                {
                                    data[category.name].map(ingredient => <Cart key={ingredient._id} ingredient={ingredient}/>)
                                }
                            </div>
                        </React.Fragment>
                )}
            </div>
        </div>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.shape({
        bun: PropTypes.arrayOf(ingredientPropTypes),
        sauce: PropTypes.arrayOf(ingredientPropTypes),
        main: PropTypes.arrayOf(ingredientPropTypes),
    })
};

export default BurgerIngredients;