import uuid from "react-uuid";

export const ADD_INGREDIENT = 'CONSTRUCTOR/ADD';
export const DEL_INGREDIENT = 'CONSTRUCTOR/DEL';
export const MOVE_INGREDIENT = 'CONSTRUCTOR/MOVE';
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