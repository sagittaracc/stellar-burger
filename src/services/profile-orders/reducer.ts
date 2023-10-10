import { TProfileOrdersActions, TProfileOrdersInitialState } from "../../types/profile-orders"
import { CONNECTION_CLOSED, CONNECTION_ERROR, CONNECTION_SUCCESS, GET_PROFILE_ORDERS } from "./actions"

const initialState: TProfileOrdersInitialState = {
    connected: false,
    orders: null,
}

export const profileOrdersReducer = (state = initialState, action: TProfileOrdersActions) => {
    switch (action.type) {
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
                orders: null,
                error: undefined,
            }
        case GET_PROFILE_ORDERS:
            return {
                ...state,
                orders: action.payload,
                error: undefined,
            }
        default:
            return state;
    }
}