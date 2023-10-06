import { TIngredient } from "./ingredient";
import { TOrder } from "./order";

export type TFeed = {
    orders: Array<TOrder>,
    total: number,
    totalToday: number
};

export type TCardOrderDetailsComponent = {
    data: TOrder,
    cost: number,
    list: Array<TIngredient>,
};

export type TIngredientsComponent = {
    list: Array<TIngredient>;
    maxCount: number;
    cost: number,
};