import { CONNECTION_CLOSED, CONNECTION_ERROR, CONNECTION_START, CONNECTION_SUCCESS, GET_PROFILE_ORDERS } from "../services/profile-orders/actions";
import { TFeed } from "./feed";
import { TOrder } from "./order";
import { TSocketActions, TSocketStoreActions } from "./socket-actions";

export type TProfileOrders = {
    orders: Array<TOrder>,
    total: number,
    totalToday: number
};

export type TProfileOrdersInitialState = {
    connected: boolean;
    orders: TFeed | null;
    error?: Event;
};

export type TProfileOrdersSocketActions = TSocketActions<
    typeof CONNECTION_START,
    typeof CONNECTION_SUCCESS,
    typeof CONNECTION_CLOSED,
    typeof CONNECTION_ERROR,
    typeof GET_PROFILE_ORDERS
>;

export type TProfileOrdersActions = TSocketStoreActions<
    typeof CONNECTION_START,
    typeof CONNECTION_SUCCESS,
    typeof CONNECTION_CLOSED,
    typeof CONNECTION_ERROR,
    typeof GET_PROFILE_ORDERS,
    TFeed
>;