import { TIngredient } from "./ingredient";
import { TOrder } from "./order";

export type TFeed = {
    orders: Array<TOrder>,
    total: number,
    totalToday: number
};