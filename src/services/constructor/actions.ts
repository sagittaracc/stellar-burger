import uuid from "react-uuid";
import { TIngredient, TIngredientId } from "../../types/ingredient";
import { IAddIngredientRequest, IDelIngredientRequest, IMoveIngredientRequest, IResetConstructorRequest } from "../../types/constructor";

export const ADD_INGREDIENT = 'CONSTRUCTOR/ADD';
export const DEL_INGREDIENT = 'CONSTRUCTOR/DEL';
export const MOVE_INGREDIENT = 'CONSTRUCTOR/MOVE';
export const CONSTRUCTOR_RESET = 'CONSTRUCTOR/RESET';

export const addIngredient = (ingredient: TIngredient): IAddIngredientRequest => {
    return {
        type: ADD_INGREDIENT,
        payload: {
            ...ingredient,
            id: uuid() as unknown as TIngredientId
        }
    }
}

export const delIngredient = (id: TIngredientId): IDelIngredientRequest => {
    return {
        type: DEL_INGREDIENT,
        payload: id
    }
}

export const moveIngredient = (one: TIngredientId, two: TIngredientId): IMoveIngredientRequest => {
    return {
        type: MOVE_INGREDIENT,
        payload: {
            one,
            two
        }
    }
}

export const constructorReset = (): IResetConstructorRequest => {
    return {
        type: CONSTRUCTOR_RESET
    }
}