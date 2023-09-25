import { ADD_INGREDIENT, CONSTRUCTOR_RESET, DEL_INGREDIENT, MOVE_INGREDIENT } from "../services/constructor/actions";
import { TIngredientId, TIngredientInfo } from "./ingredient";

export type TInitialConstructor = {
    bun: TIngredientInfo | null;
    ingredients: Array<TIngredientInfo>;
};

export interface IAddIngredientRequest {
    readonly type: typeof ADD_INGREDIENT;
    payload: TIngredientInfo;
}

export interface IDelIngredientRequest {
    readonly type: typeof DEL_INGREDIENT;
    payload: TIngredientId;
}

export interface IMoveIngredientRequest {
    readonly type: typeof MOVE_INGREDIENT;
    payload: {
        one: TIngredientId;
        two: TIngredientId;
    }
};

export interface IResetConstructorRequest {
    readonly type: typeof CONSTRUCTOR_RESET;
}

export type TConstructorAction =
    IAddIngredientRequest |
    IDelIngredientRequest |
    IMoveIngredientRequest |
    IResetConstructorRequest;