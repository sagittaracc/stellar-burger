import { TIngredient } from "./ingredient";

export type TSuccess = {
    success: true;
};

export type TIngredientResponse = TSuccess & {
    data: Array<TIngredient>;
};