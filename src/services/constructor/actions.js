import uuid from "react-uuid";
import { post } from "../../utils/api";

export const ADD_INGREDIENT = 'CONSTRUCTOR/ADD';
export const DEL_INGREDIENT = 'CONSTRUCTOR/DEL';
export const MOVE_INGREDIENT = 'CONSTRUCTOR/MOVE';
export const CONSTRUCTOR_RESET = 'CONSTRUCTOR/RESET';

export const CREATE_ORDER_REQUEST = 'CONSTRUCTOR/ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CONSTRUCTOR/ORDER_SUCCESS';
export const CREATE_ORDER_FAIL = 'CONSTRUCTOR/ORDER_FAIL';

export const addIngredient = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        payload: {
            ...ingredient,
            id: uuid()
        }
    }
}

export const delIngredient = (id) => {
    return {
        type: DEL_INGREDIENT,
        payload: id
    }
}

export const moveIngredient = (one, two) => {
    return {
        type: MOVE_INGREDIENT,
        payload: {
            one,
            two
        }
    }
}

export const constructorReset = () => {
    return {
        type: CONSTRUCTOR_RESET
    }
}

export const createOrder = (ids) => (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });

    post('/orders', { ingredients: ids })
        .then(data => {
            dispatch({ type: CONSTRUCTOR_RESET });
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order });
        })
        .catch(error => {
            dispatch({ type: CREATE_ORDER_FAIL });
        });
}