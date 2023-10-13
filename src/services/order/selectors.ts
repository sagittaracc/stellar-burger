import { createSelector } from "reselect";
import { RootState } from "../../types";

export const getOrderRequest = (store: RootState) => store.order.orderRequest;
export const getOrderError = (store: RootState) => store.order.orderError;
export const getOrder = (store: RootState) => store.order.order;

export const orderReadySelector = createSelector(getOrderRequest, getOrderError, getOrder, (orderRequest, orderError, order) => {
    return !orderRequest && !orderError && order;
});