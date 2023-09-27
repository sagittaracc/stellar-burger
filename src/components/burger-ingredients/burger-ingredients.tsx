import { useState, useEffect } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientBox from "./ingredient-box/ingredient-box";
import { useInView } from 'react-intersection-observer';
import { FC } from 'react';
import { TBurgerIngredientComponent, TIngredientCategory } from "../../types/ingredient";

const BurgerIngredients: FC<TBurgerIngredientComponent> = ({ data }) => {
    const [tab, setTab] = useState<TIngredientCategory>('bun');

    const threshold = 0.45;
    const [bunsRef, bunsInView] = useInView({threshold});
    const [saucesRef, saucesInView] = useInView({threshold});
    const [mainRef, mainInView] = useInView({threshold});

    useEffect(() => {
        let tab: TIngredientCategory = 'bun';

        if (bunsInView) {
            tab = 'bun';
        }
        else if (saucesInView) {
            tab = 'sauce';
        }
        else if (mainInView) {
            tab = 'main';
        }

        setTab(tab);
    }, [bunsInView, saucesInView, mainInView])

    return (
        <div className="flex columns text text_type_main-default h-100">
            <h1>Соберите бургер</h1>

            <div className="flex">
                <Tab onClick={() => null} value="bun" active={tab === 'bun'}>Булки</Tab>
                <Tab onClick={() => null} value="sauce" active={tab === 'sauce'}>Соусы</Tab>
                <Tab onClick={() => null} value="main" active={tab === 'main'}>Начинки</Tab>
            </div>

            <div className="custom-scroll full-space overflow-auto">
                <IngredientBox tab={bunsRef} title="Булки" category="bun" data={data} />
                <IngredientBox tab={saucesRef} title="Соусы" category="sauce" data={data} />
                <IngredientBox tab={mainRef} title="Начинки" category="main" data={data} />
            </div>
        </div>
    );
}

export default BurgerIngredients;