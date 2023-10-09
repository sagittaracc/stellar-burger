import { CONNECTION_CLOSED, CONNECTION_ERROR, CONNECTION_START, CONNECTION_SUCCESS, GET_FEED } from "../services/feed/actions";
import { TOrder } from "./order";

export type TFeed = {
    orders: Array<TOrder>,
    total: number,
    totalToday: number
};

export type TFeedStoreActions = {
    wsInit: typeof CONNECTION_START,
    onOpen: typeof CONNECTION_SUCCESS,
    onClose: typeof CONNECTION_CLOSED,
    onError: typeof CONNECTION_ERROR,
    onMessage: typeof GET_FEED,
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

export interface IFeedConnectionStartAction {
    readonly type: typeof CONNECTION_START;
}

export interface IFeedConnectionSuccessAction {
    readonly type: typeof CONNECTION_SUCCESS;
}

export interface IFeedConnectionErrorAction {
    readonly type: typeof CONNECTION_ERROR;
    payload: Event;
}

export interface IFeedConnectionClosedAction {
    readonly type: typeof CONNECTION_CLOSED;
}

export interface IGetFeedAction {
    readonly type: typeof GET_FEED;
    payload: TFeed;
}

export type TFeedActions =
    IFeedConnectionStartAction |
    IFeedConnectionSuccessAction |
    IFeedConnectionErrorAction |
    IFeedConnectionClosedAction |
    IGetFeedAction;