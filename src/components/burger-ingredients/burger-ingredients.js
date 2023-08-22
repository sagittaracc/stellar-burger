import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../types/ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "./ingredient-details/ingredient-details";
import useModal from "../../hooks/useModal";
import IngredientBox from "./ingredient-box/ingredient-box";



const BurgerIngredients = ({ data }) => {
    const [tab, setTab] = useState('bun');
    const [modalShown, openModal, closeModal] = useModal();
    const [current, setCurrent] = useState(null);

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
                <Tab value="bun" active={tab === 'bun'} onClick={setTab}>Булки</Tab>
                <Tab value="sauce" active={tab === 'sauce'} onClick={setTab}>Соусы</Tab>
                <Tab value="main" active={tab === 'main'} onClick={setTab}>Начинки</Tab>
            </div>

            <div className="custom-scroll full-space overflow-auto">
                <IngredientBox onClick={showIngredient} title="Булки" category="bun" data={data} />
                <IngredientBox onClick={showIngredient} title="Соусы" category="sauce" data={data} />
                <IngredientBox onClick={showIngredient} title="Начинки" category="main" data={data} />
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