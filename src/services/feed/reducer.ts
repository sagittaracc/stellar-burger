import { TFeedActions, TFeedInitialState } from "../../types/feed";
import { CONNECTION_CLOSE, CONNECTION_CLOSED, CONNECTION_ERROR, CONNECTION_SUCCESS, GET_FEED } from "./actions";

const initialState: TFeedInitialState = {
    connected: false,
    feed: null,
}

export const feedReducer = (state = initialState, action: TFeedActions) => {
    switch (action.type) {
        case CONNECTION_CLOSE:
            return {
                ...state,
                connected: false,
                feed: null,
                error: undefined
            }
        case CONNECTION_SUCCESS:
            return {
                ...state,
                connected: true,
                error: undefined,
            }
        case CONNECTION_ERROR:
            return {
                ...state,
                connected: false,
                error: action.payload,
            }
        case CONNECTION_CLOSED:
            return {
                ...state,
                connected: false,
                feed: null,
                error: undefined,
            }
        case GET_FEED:
            return {
                ...state,
                feed: action.payload,
                error: undefined,
            }
        default:
            return state;
    }
}