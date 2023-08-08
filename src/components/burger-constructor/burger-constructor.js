import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ingredientPropTypes } from "../types/ingredient";
import Ingredients from "./ingredients/ingredients";
import Modal from "../modal/modal";
import { useState } from "react";
import OrderDetails from "./order-details/order-details";
import Bun from "./bun/bun";

const BurgerConstructor = ({ bun, ingredients }) => {
    const [modalShown, setModalShown] = useState(false);

    let sum = ingredients.reduce((total, ingredient) => total + ingredient.price, bun ? bun.price * 2 : 0);

    return (
        <div className="flex columns h-100">
            <Bun position="top" data={bun} />
            <Ingredients data={ingredients} />
            <Bun position="bottom" data={bun} />

            <div className="ml-8 mb-4">
                <div className="float-right">
                    <span className="mr-2 text_type_main-large">{sum}</span>
                    <CurrencyIcon type="primary" />
                    <Button extraClass="ml-6" htmlType="button" type="primary" size="large" onClick={() => setModalShown(true)}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
            {
                modalShown &&
                <Modal onClose={() => setModalShown(false)}>
                    <OrderDetails />
                </Modal>
            }
        </div>
    );
}

BurgerConstructor.propTypes = {
    bun: ingredientPropTypes,
    ingredients: PropTypes.arrayOf(ingredientPropTypes)
};

export default BurgerConstructor;