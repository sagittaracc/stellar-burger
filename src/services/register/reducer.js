import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './actions';

const initialState = {
    isRequest: false,
    error: false,
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                isRequest: true,
                error: null
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRequest: false,
                error: null
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isRequest: false,
                error: action.payload
            }
        default:
            return state;
    }
}