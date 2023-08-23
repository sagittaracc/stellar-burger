import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../types/ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "./ingredient-details/ingredient-details";
import useModal from "../../hooks/useModal";
import IngredientBox from "./ingredient-box/ingredient-box";
import { useInView } from 'react-intersection-observer';



const BurgerIngredients = ({ data }) => {
    const [tab, setTab] = useState('bun');
    const [current, setCurrent] = useState(null);

    const threshold = 0.5;
    const [bunsRef, bunsInView] = useInView({threshold});
    const [saucesRef, saucesInView] = useInView({threshold});
    const [mainRef, mainInView] = useInView({threshold});

    useEffect(() => {
        let tab = null;

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

    const [modalShown, openModal, closeModal] = useModal();

    const showIngredient = (ingredient) => {
        setCurrent(ingredient);
        openModal();
    }

    const closeIngredient = () => {
        closeModal();
        setCurrent(null);
    }

    return (
        <div className="flex columns text text_type_main-default h-100">
            <h1>Соберите бургер</h1>

            <div className="flex">
                <Tab value="bun" active={tab === 'bun'}>Булки</Tab>
                <Tab value="sauce" active={tab === 'sauce'}>Соусы</Tab>
                <Tab value="main" active={tab === 'main'}>Начинки</Tab>
            </div>

            <div className="custom-scroll full-space overflow-auto">
                <IngredientBox tab={bunsRef} onClick={showIngredient} title="Булки" category="bun" data={data} />
                <IngredientBox tab={saucesRef} onClick={showIngredient} title="Соусы" category="sauce" data={data} />
                <IngredientBox tab={mainRef} onClick={showIngredient} title="Начинки" category="main" data={data} />
            </div>
            {
                modalShown && current &&
                <Modal header="Детали ингредиента" onClose={closeIngredient}>
                    <IngredientDetails ingredient={current} />
                </Modal>
            }
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