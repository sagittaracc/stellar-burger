import { createSelector } from "reselect";

export const getOrderRequest = (store) => store.order.orderRequest;
export const getOrderError = (store) => store.order.orderError;
export const getOrder = (store) => store.order.order;

export const orderReadySelector = createSelector(getOrderRequest, getOrderError, getOrder, (orderRequest, orderError, order) => {
    return !orderRequest && !orderError && order;
});