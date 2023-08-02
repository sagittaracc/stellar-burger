import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngridients = ({ ingridients }) => {
    const [current, setCurrent] = React.useState('bun');
    const categories = [
        { type: "bun", name: "Булки" },
        { type: "sauce", name: "Соусы" },
        { type: "main", name: "Начинки" },
    ];

    return (
        <div className="text text_type_main-default">
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

            <div className="custom-scroll" style={{ height: 1040, overflow: "hidden", overflowY: "auto" }}>
                {categories.map(
                    category =>
                        <>
                            <h1 className="text-left pt-10">{category.name}</h1>
                            <div className="flex wrap">
                                {ingridients[category.type] && ingridients[category.type].map(
                                    (ingridient, index) =>
                                        <div class="col">
                                            <img src={ingridient.image} />
                                            <div>
                                                <span className="mr-2 align-top">{ingridient.price}</span>
                                                <CurrencyIcon type="primary" />
                                            </div>
                                            <div>{ingridient.name}</div>
                                        </div>
                                )}
                            </div>
                        </>
                )}
            </div>
        </div>
    );
}

export default BurgerIngridients;