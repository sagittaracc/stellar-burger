import { TIngredient } from "./ingredient";

export type TIngredientList = Array<string>;

export type TStatus = "done";

export type TCardOrderComponent = {
    data: {
        _id: string,
        ingredients: TIngredientList,
        status: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        number: number
    },
};

export type TCardOrderDetailsComponent = {
    data: {
        _id: string,
        ingredients: TIngredientList,
        status: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        number: number
    },
    cost: number,
    list: Array<TIngredient>,
};

export type TIngredientsComponent = {
    list: Array<TIngredient>;
    maxCount: number;
    cost: number,
};