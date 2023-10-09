import { createSelector } from "reselect";

export const getConnected = (store) => store.profileOrders.connected;
export const getError = (store) => store.profileOrders.error;
export const getProfileOrders = (store) => store.profileOrders.orders;

export const getData = createSelector(getConnected, getError, getProfileOrders, (connected, error, orders) => {
    return [
        connected && error === undefined && orders !== null,
        orders?.orders,
        orders?.total,
        orders?.totalToday,
    ];
});