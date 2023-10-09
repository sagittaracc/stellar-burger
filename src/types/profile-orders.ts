import { CONNECTION_CLOSED, CONNECTION_ERROR, CONNECTION_START, CONNECTION_SUCCESS, GET_PROFILE_ORDERS } from "../services/profile-orders/actions";
import { TFeed } from "./feed";
import { TOrder } from "./order";

export type TProfileOrders = {
    orders: Array<TOrder>,
    total: number,
    totalToday: number
};

export type TProfileOrdersStoreActions = {
    wsInit: typeof CONNECTION_START,
    onOpen: typeof CONNECTION_SUCCESS,
    onClose: typeof CONNECTION_CLOSED,
    onError: typeof CONNECTION_ERROR,
    onMessage: typeof GET_PROFILE_ORDERS,
};

export const profileOrdersStoreActions = {
    wsInit: CONNECTION_START,
    onOpen: CONNECTION_SUCCESS,
    onClose: CONNECTION_CLOSED,
    onError: CONNECTION_ERROR,
    onMessage: GET_PROFILE_ORDERS,
}

export type TProfileOrdersInitialState = {
    connected: boolean;
    orders: TFeed | null;
    error?: Event;
};

export interface IProfileOrdersConnectionStartAction {
    readonly type: typeof CONNECTION_START;
}

export interface IProfileOrdersConnectionSuccessAction {
    readonly type: typeof CONNECTION_SUCCESS;
}

export interface IProfileOrdersConnectionErrorAction {
    readonly type: typeof CONNECTION_ERROR;
    payload: Event;
}

export interface IProfileOrdersConnectionClosedAction {
    readonly type: typeof CONNECTION_CLOSED;
}

export interface IGetProfileOrdersAction {
    readonly type: typeof GET_PROFILE_ORDERS;
    payload: TFeed;
}

export type TProfileOrdersActions =
    IProfileOrdersConnectionStartAction |
    IProfileOrdersConnectionSuccessAction |
    IProfileOrdersConnectionErrorAction |
    IProfileOrdersConnectionClosedAction |
    IGetProfileOrdersAction;