import React from "react";
import PropTypes from 'prop-types';
import { Counter, Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingridientPropTypes } from "../types/ingridient";

const Cart = ({ ingridient }) => {
    return (
        <div class="text-center col pt-6 pb-10 pl-4 pr-4 position-relative">
            <Counter count={1} size="default" extraClass="m-4" />
            <img src={ingridient.image} />
            <div>
                <span className="mr-2 align-top text_type_main-medium">{ingridient.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div>{ingridient.name}</div>
        </div>
    );
}

const BurgerIngridients = ({ data }) => {
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
                        <>
                            <h1 className="text-left pt-10">{category.caption}</h1>
                            <div className="flex wrap pr-7">
                                {
                                    data[category.name] &&
                                    data[category.name].map(ingridient => <Cart ingridient={ingridient}/>)
                                }
                            </div>
                        </>
                )}
            </div>
        </div>
    );
}

Cart.propTypes = {
    ingridient: ingridientPropTypes.isRequired
}

BurgerIngridients.propTypes = {
    data: PropTypes.shape({
        bun: PropTypes.arrayOf(ingridientPropTypes),
        sauce: PropTypes.arrayOf(ingridientPropTypes),
        main: PropTypes.arrayOf(ingridientPropTypes),
    })
};

export default BurgerIngridients;