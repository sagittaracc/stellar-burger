import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredients from "./ingredients/ingredients";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import Bun from "./bun/bun";
import { getBun, getCost, getIngredients, orderHasItemsSelector } from '../../services/constructor/selectors';
import { addIngredient } from '../../services/constructor/actions';
import { useDrop } from 'react-dnd';
import useModal from '../../hooks/useModal';
import Placeholder from './placeholder/placeholder';
import { getOrder, orderReadySelector } from '../../services/order/selectors';
import { createOrder } from '../../services/order/actions';
import { useNavigate } from 'react-router-dom';

const BurgerConstructor = ({  }) => {
    const bun = useSelector(getBun);
    const ingredients = useSelector(getIngredients);
    const order = useSelector(getOrder);
    const orderHasItems = useSelector(orderHasItemsSelector);
    const orderReady = useSelector(orderReadySelector);
    const cost = useSelector(getCost);
    const [modalShown, openModal, closeModal] = useModal();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop: (ingredient) => {
            dispatch(addIngredient(ingredient));
        }
    })

    const doOrder = () => {
        const ids = [bun._id].concat(ingredients.map(ingredient => ingredient._id)).concat(bun._id);
        dispatch(createOrder(ids, () => navigate('/login')));
        openModal();
    }

    return (
        <div ref={dropTarget} className="flex columns h-100">
            {
                !bun &&
                <Placeholder />
            }
            <Bun position="top" data={bun} />
            <Ingredients data={ingredients} />
            <Bun position="bottom" data={bun} />
            {
                orderHasItems &&
                <div className="ml-8 mb-4">
                    <div className="float-right">
                        <span className="mr-2 text_type_main-large">{cost}</span>
                        <CurrencyIcon type="primary" />
                        <Button extraClass="ml-6" htmlType="button" type="primary" size="large" onClick={doOrder}>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            }
            {
                modalShown && orderReady &&
                <Modal onClose={closeModal}>
                    <OrderDetails order={order} />
                </Modal>
            }
        </div>
    );
}

export default BurgerConstructor;