import React from "react";
import { Counter, Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const CartIngridient = ({ ingridient }) => {
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

const BurgerIngridients = ({ ingridients }) => {
    const [current, setCurrent] = React.useState('bun');
    const categories = [
        { type: "bun", name: "Булки" },
        { type: "sauce", name: "Соусы" },
        { type: "main", name: "Начинки" },
    ];

    return (
        <div className="flex columns text text_type_main-default h-100">
            <h1>Соберите бургер</h1>

            <div className="flex">
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>

            <div className="custom-scroll full-space overflow-auto">
                {categories.map(
                    category =>
                        <>
                            <h1 className="text-left pt-10">{category.name}</h1>
                            <div className="flex wrap pr-7">
                                {
                                    ingridients[category.type] &&
                                        ingridients[category.type].map(ingridient => <CartIngridient ingridient={ingridient}/>)
                                }
                            </div>
                        </>
                )}
            </div>
        </div>
    );
}

export default BurgerIngridients;