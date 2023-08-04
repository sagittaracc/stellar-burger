import { Button, ConstructorElement, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ingredientPropTypes } from "../types/ingredient";
import Ingredients from "./ingredients/ingredients";
import Modal from "../modal/modal";
import { useState } from "react";
import OrderDetails from "./order-details/order-details";

const BurgerConstructor = ({ data }) => {
    let sum = data.main.reduce((total, ingredient) => total + ingredient.price, 0);

    const [modalShown, setModalShown] = useState(false);

    return (
        <div className="flex columns h-100">
            <div className="mt-25 ml-8 mb-4">
                <div className="ml-9">
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={1255}
                        thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
                    />
                </div>
            </div>

            <Ingredients data={data} />

            <div className="ml-8">
                <div className="ml-9">
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={1255}
                        thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
                    />
                </div>
            </div>

            <div className="ml-8 mt-4 mb-4 mt-4">
                <div className="float-right">
                    <span className="mr-2 text_type_main-large">{1255 + 1255 + sum}</span>
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
    data: PropTypes.shape({
        bun: PropTypes.arrayOf(ingredientPropTypes),
        sauce: PropTypes.arrayOf(ingredientPropTypes),
        main: PropTypes.arrayOf(ingredientPropTypes),
    })
};

export default BurgerConstructor;