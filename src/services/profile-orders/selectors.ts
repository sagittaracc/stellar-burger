import { createSelector } from "reselect";
import { RootState } from "../../types";

export const getConnected = (store: RootState) => store.profileOrders.connected;
export const getError = (store: RootState) => store.profileOrders.error;
export const getProfileOrders = (store: RootState) => store.profileOrders.orders;

export const profileOrdersLoadedSelector = createSelector(getConnected, getError, getProfileOrders, (connected, error, orders) => {
    return connected && error === undefined && orders !== null;
});