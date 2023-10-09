import { createSelector } from "reselect";

export const getConnected = (store) => store.feed.connected;
export const getError = (store) => store.feed.error;
export const getFeed = (store) => store.feed.feed;

export const getData = createSelector(getConnected, getError, getFeed, (connected, error, feed) => {
    return [
        connected && error === undefined && feed !== null,
        feed?.orders,
        feed?.total,
        feed?.totalToday,
    ];
});