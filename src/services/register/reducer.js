import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './actions';

const initialState = {
    registerRequest: false,
    registerError: false
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                registerRequest: true,
                registerError: false
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerRequest: false,
                registerError: false
            };
        case REGISTER_FAIL:
            return {
                ...state,
                registerRequest: false,
                registerError: true
            }
        default:
            return state;
    }
}