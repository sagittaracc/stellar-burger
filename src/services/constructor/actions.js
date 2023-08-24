import uuid from "react-uuid";

export const ADD_INGREDIENT = 'CONSTRUCTOR/ADD';
export const DEL_INGREDIENT = 'CONSTRUCTOR/DEL';
export const CONSTRUCTOR_RESET = 'CONSTRUCTOR/RESET';

export const addIngredient = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        payload: {
            ...ingredient,
            id: uuid()
        }
    }
}