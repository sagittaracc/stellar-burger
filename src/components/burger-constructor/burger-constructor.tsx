import { useSelector } from 'react-redux';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredients from "./ingredients/ingredients";
import Modal from "../modal/modal";
import Bun from "./bun/bun";
import { getBun, getCost, getIngredients, orderHasItemsSelector } from '../../services/constructor/selectors';
import { addIngredient } from '../../services/constructor/actions';
import { useDrop } from 'react-dnd';
import useModal from '../../hooks/useModal';
import { getOrder, getOrderRequest, orderReadySelector } from '../../services/order/selectors';
import { createOrder } from '../../services/order/actions';
import { useNavigate } from 'react-router-dom';
import { TIngredientId, TIngredient } from '../../types/ingredient';
import { IModalHook } from '../../types/modal';
import OrderNumber from './order-number/order-number';
import { ingredientsSelector } from '../../services/ingredients/selectors';
import IngredientList from '../ingredient-list/ingredient-list';
import { useDispatch } from '../../types';

const BurgerConstructor = ({ }) => {
    const bun = useSelector(getBun);
    const ingredients: Array<TIngredient> = useSelector(getIngredients);
    const [, , ingredientList] = useSelector(ingredientsSelector);
    const order = useSelector(getOrder);
    const orderHasItems = useSelector(orderHasItemsSelector);
    const inProcess = useSelector(getOrderRequest);
    const orderReady = useSelector(orderReadySelector);
    const cost = useSelector(getCost);
    const { open: modalShown, openModal, closeModal }: IModalHook = useModal();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop: (ingredient: TIngredient) => {
            dispatch(addIngredient(ingredient));
        }
    })

    const doOrder = () => {
        const ids: Array<TIngredientId> = [bun._id].concat(ingredients.map(ingredient => ingredient._id)).concat(bun._id);
        dispatch(createOrder(ids, () => navigate('/login')));
        openModal();
    }

    return (
        <>
            <div ref={dropTarget} className="flex columns h-100">
                {
                    bun &&
                    <>
                        <Bun position="top" data={bun} />
                        <Ingredients data={ingredients} bun={bun} />
                        <Bun position="bottom" data={bun} />
                        {
                            orderHasItems &&
                            <div className="ml-8 mb-4">
                                <div className="float-right">
                                    <span className="mr-2 text_type_main-large">{cost}</span>
                                    <CurrencyIcon type="primary" />
                                    <Button extraClass="ml-6" htmlType="button" type="primary" size="large" disabled={inProcess} onClick={doOrder}>
                                        {inProcess ? 'Формируется...' : 'Оформить заказ'}
                                    </Button>
                                </div>
                            </div>
                        }
                    </>
                }
                {
                    !bun &&
                    <div className='ml-20 mt-10 p-10' style={{ background: "#1c1c21", borderRadius: 30 }}>
                        <p className='text text_type_main-medium'>Перетащите сюда булку, а потом ингредиенты</p>
                        <div className='flex'>
                            <IngredientList list={ingredientList} maxCount={5} />
                        </div>
                    </div>
                }
                {
                    modalShown && orderReady &&
                    <Modal onClose={closeModal}>
                        <OrderNumber {...order} />
                    </Modal>
                }
            </div>
        </>
    );
}

export default BurgerConstructor;