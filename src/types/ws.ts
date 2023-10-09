import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "../services/ws/actions";

export type TWSStoreActions = {
    wsInit: typeof WS_CONNECTION_START,
    onOpen: typeof WS_CONNECTION_SUCCESS,
    onClose: typeof WS_CONNECTION_CLOSED,
    onError: typeof WS_CONNECTION_ERROR,
    onMessage: typeof WS_GET_MESSAGE,
};

export type TWsState = {
    connected: boolean;
    data: any;
    error?: Event;
};

export interface IWsConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
    payload: Event;
}

export interface IWsConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE;
    payload: any;
}

export type TWsActions =
    IWsConnectionStartAction |
    IWsConnectionSuccessAction |
    IWsConnectionErrorAction |
    IWsConnectionClosedAction |
    IWsGetMessageAction;