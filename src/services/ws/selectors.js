import { createSelector } from "reselect";

export const getConnected = (store) => store.ws.connected;
export const getError = (store) => store.ws.error;
export const getData = (store) => store.ws.data;

export const hasData = createSelector(getConnected, getError, getData, (connected, error, data) => {
    return connected && error === undefined && data !== null;
});