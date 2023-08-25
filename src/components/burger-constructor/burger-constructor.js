import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredients from "./ingredients/ingredients";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import Bun from "./bun/bun";
import { getBun, getIngredients, orderHasItemsSelector, orderReadySelector } from '../../services/constructor/selectors';
import { addIngredient, createOrder } from '../../services/constructor/actions';
import { useDrop } from 'react-dnd';

const BurgerConstructor = ({  }) => {
    const bun = useSelector(getBun);
    const ingredients = useSelector(getIngredients);
    const orderHasItems = useSelector(orderHasItemsSelector);
    const orderReady = useSelector(orderReadySelector);

    const dispatch = useDispatch();

    let cost = useMemo(() => {
        return bun
            ? bun.price * 2 + ingredients.reduce((total, ingredient) => total + ingredient.price, 0)
            : 0;
    }, [bun, ingredients]);

    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop: (ingredient) => {
            dispatch(addIngredient(ingredient));
        }
    })

    const order = () => {
        const ids = [];
        dispatch(createOrder(ids));
    }

    return (
        <div ref={dropTarget} className="flex columns h-100">
            <Bun position="top" data={bun} />
            <Ingredients data={ingredients} />
            <Bun position="bottom" data={bun} />
            {
                orderHasItems &&
                <div className="ml-8 mb-4">
                    <div className="float-right">
                        <span className="mr-2 text_type_main-large">{cost}</span>
                        <CurrencyIcon type="primary" />
                        <Button extraClass="ml-6" htmlType="button" type="primary" size="large" onClick={order}>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            }
            {
                orderReady &&
                <Modal>
                    <OrderDetails order={order} />
                </Modal>
            }
        </div>
    );
}

export default BurgerConstructor;