import { TIngredient } from "./ingredient";

export type TSuccess = {
    success: true;
};

export type TError = {
    success: false;
};

export type TIngredientResponse = TSuccess & {
    data: Array<TIngredient>;
};

export type TErrorResponse = TError & {
    message: string;
};