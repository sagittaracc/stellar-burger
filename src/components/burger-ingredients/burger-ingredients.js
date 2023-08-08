import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../types/ingredient";
import Cart from "./cart/cart";
import Modal from "../modal/modal";
import IngredientDetails from "./ingredient-details/ingredient-details";



const BurgerIngredients = ({ data }) => {
    const [tab, setTab] = useState('bun');
    const categories = [
        { name: "bun", caption: "Булки" },
        { name: "sauce", caption: "Соусы" },
        { name: "main", caption: "Начинки" },
    ];

    const [modalShown, setModalShown] = useState(false);
    const [current, setCurrent] = useState(null);

    const openModal = (ingredient) => {
        setCurrent(ingredient);
        setModalShown(true);
    }

    const closeModal = () => {
        setModalShown(false);
        setCurrent(null);
    }

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
                                    data[category.name].map(ingredient => <Cart onClick={openModal} key={ingredient._id} ingredient={ingredient}/>)
                                }
                            </div>
                        </React.Fragment>
                )}
            </div>
            {
                modalShown && current &&
                <Modal header="Детали ингредиента" onClose={closeModal}>
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