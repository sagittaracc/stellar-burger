import { TWsActions, TWsState } from "../../types/ws";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "./actions";

const initialState: TWsState = {
    connected: false,
    data: null,
}

export const wsReducer = (state = initialState, action: TWsActions) => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                connected: true,
                error: undefined,
            }
        case WS_CONNECTION_ERROR:
            return {
                ...state,
                connected: false,
                error: action.payload,
            }
        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                connected: false,
                error: undefined,
            }
        case WS_GET_MESSAGE:
            return {
                ...state,
                data: action.payload,
                error: undefined,
            }
        default:
            return state;
    }
}