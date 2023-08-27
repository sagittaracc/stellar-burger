import { createSelector } from "reselect";

export const getBun = (store) => store.construct.bun;
export const getIngredients = (store) => store.construct.ingredients;

export const orderHasItemsSelector = createSelector(getBun, getIngredients, (bun, ingredients) => {
    return bun !== null && ingredients.length > 0;
})

export const getCost = createSelector(getBun, getIngredients, (bun, ingredients) => {
    return bun
        ? bun.price * 2 + ingredients.reduce((total, ingredient) => total + ingredient.price, 0)
        : 0;
});