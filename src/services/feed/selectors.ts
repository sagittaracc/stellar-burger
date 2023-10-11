import { createSelector } from "reselect";
import { RootState } from "../../types";

export const getConnected = (store: RootState) => store.feed.connected;
export const getError = (store: RootState) => store.feed.error;
export const getFeed = (store: RootState) => store.feed.feed;

export const feedLoadedSelector = createSelector(getConnected, getError, getFeed, (connected, error, feed) => {
    return connected && error === undefined && feed !== null;
});