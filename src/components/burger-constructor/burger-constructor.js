import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredients from "./ingredients/ingredients";
import Modal from "../modal/modal";
import { useState } from "react";
import OrderDetails from "./order-details/order-details";
import Bun from "./bun/bun";
import { post } from "../../utils/api";
import useModal from "../../hooks/useModal";

const BurgerConstructor = ({  }) => {
    const [error, setError] = useState(false);
    const [order, setOrder] = useState(null);

    const [modalShown, openModal, closeModal] = useModal();

    let bun = null;
    let ingredients = [];
    let cost = ingredients.reduce((total, ingredient) => total + ingredient.price, bun ? bun.price * 2 : 0);

    const doOrder = () => {
        const ids = [bun._id].concat(ingredients.map(ingredient => ingredient._id)).concat([bun._id]);

        post('/orders', {ingredients: ids})
            .then(data => {
                setError(false);
                setOrder(data.order);
                openModal();
            })
            .catch(error => {
                setError(true);
            });
    }

    return (
        <div className="flex columns h-100">
            <Bun position="top" data={bun} />
            <Ingredients data={ingredients} />
            <Bun position="bottom" data={bun} />

            <div className="ml-8 mb-4">
                <div className="float-right">
                    <span className="mr-2 text_type_main-large">{cost}</span>
                    <CurrencyIcon type="primary" />
                    <Button extraClass="ml-6" htmlType="button" type="primary" size="large" onClick={doOrder}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
            {
                !error && order && modalShown &&
                <Modal onClose={closeModal}>
                    <OrderDetails order={order} />
                </Modal>
            }
        </div>
    );
}

export default BurgerConstructor;