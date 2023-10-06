import { TIngredient } from "./ingredient";
import { TOrder } from "./order";

export type TIngredientList = Array<string>;

export type TFeed = {
    orders: Array<TOrder>,
    total: number,
    totalToday: number
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