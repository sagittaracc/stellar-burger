import { TIngredient, TIngredientId } from "../../types/ingredient";

export const bun: TIngredient = {
    calories      : 50,
    carbohydrates : 40,
    fat           : 30,
    image         : '',
    image_large   : '',
    image_mobile  : '',
    name          : "Булка",
    price         : 1000,
    proteins      : 30,
    type          : "bun",
    _id           : "12345" as unknown as TIngredientId,
    id            : "" as unknown as TIngredientId,
};