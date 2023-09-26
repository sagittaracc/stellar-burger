import { AppThunk, TDispatch } from "../../types";
import { TIngredientId } from "../../types/ingredient";
import { securePost } from "../../utils/api";
import { CONSTRUCTOR_RESET } from "../constructor/actions";

export const CREATE_ORDER_REQUEST = 'CONSTRUCTOR/ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CONSTRUCTOR/ORDER_SUCCESS';
export const CREATE_ORDER_FAIL = 'CONSTRUCTOR/ORDER_FAIL';

export const createOrder: AppThunk = (ids: Array<TIngredientId>, gotoLoginPage: () => void) => (dispatch: TDispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });

    securePost('/orders', { ingredients: ids })
        .then(data => {
            dispatch({ type: CONSTRUCTOR_RESET });
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order });
        })
        .catch(error => {
            dispatch({ type: CREATE_ORDER_FAIL });
            gotoLoginPage();
        });
}