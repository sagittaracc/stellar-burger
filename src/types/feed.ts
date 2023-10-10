import { CONNECTION_CLOSED, CONNECTION_ERROR, CONNECTION_START, CONNECTION_SUCCESS, GET_FEED } from "../services/feed/actions";
import { TOrder } from "./order";
import { TSocketActions, TSocketStoreActions } from "./socket-actions";

export type TFeed = {
    orders: Array<TOrder>,
    total: number,
    totalToday: number
};

export const feedStoreActions = {
    wsInit: CONNECTION_START,
    onOpen: CONNECTION_SUCCESS,
    onClose: CONNECTION_CLOSED,
    onError: CONNECTION_ERROR,
    onMessage: GET_FEED,
}

export type TFeedInitialState = {
    connected: boolean;
    feed: TFeed | null;
    error?: Event;
};

export type TFeedStoreActions = TSocketStoreActions<
    typeof CONNECTION_START,
    typeof CONNECTION_SUCCESS,
    typeof CONNECTION_CLOSED,
    typeof CONNECTION_ERROR,
    typeof GET_FEED
>;

export type TFeedActions = TSocketActions<
    typeof CONNECTION_START,
    typeof CONNECTION_SUCCESS,
    typeof CONNECTION_CLOSED,
    typeof CONNECTION_ERROR,
    typeof GET_FEED,
    TFeed
>;