import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
} from './actions';

const initialState = {
    orderRequest: false,
    orderError: false,
    order: null,
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                orderRequest: true,
                orderError: false,
                order: null
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                orderRequest: false,
                orderError: false,
                order: action.payload
            }
        case CREATE_ORDER_FAIL:
            return {
                ...state,
                orderRequest: false,
                orderError: true,
                order: null
            }
        default:
            return state;
    }
};