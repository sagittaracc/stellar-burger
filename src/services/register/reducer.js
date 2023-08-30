import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './actions';

const initialState = {
    registerRequest: false,
    registerError: false,
    errorMessage: null
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                registerRequest: true,
                registerError: false,
                errorMessage: null
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerRequest: false,
                registerError: false,
                errorMessage: null
            };
        case REGISTER_FAIL:
            return {
                ...state,
                registerRequest: false,
                registerError: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}