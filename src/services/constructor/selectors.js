import { createSelector } from "reselect";

export const getBun = (store) => store.construct.bun;
export const getIngredients = (store) => store.construct.ingredients;

export const getOrderRequest = (store) => store.construct.orderRequest;
export const getOrderError = (store) => store.construct.orderError;
export const getOrder = (store) => store.construct.order;

export const orderHasItemsSelector = createSelector(getBun, getIngredients, (bun, ingredients) => {
    return bun !== null && ingredients.length > 0;
})

export const orderReadySelector = createSelector(getOrderRequest, getOrderError, getOrder, (orderRequest, orderError, order) => {
    return !orderRequest && !orderError && order;
});