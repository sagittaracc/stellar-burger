import {
    AUTH_REQUEST,
    SET_AUTH,
    UNSET_AUTH
} from './actions';

const initialState = {
    authRequest: false,
    authChecked: false,
    authSuccess: false,
    email: '',
    name: ''
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                authRequest: true,
                authChecked: false,
                authSuccess: false,
            }
        case SET_AUTH:
            return {
                ...state,
                authRequest: false,
                authChecked: true,
                authSuccess: true,
                email: action.payload.email,
                name: action.payload.name,
            }
        case UNSET_AUTH:
            return {
                ...state,
                authRequest: false,
                authChecked: true,
                authSuccess: false,
                email: '',
                name: '',
            }
        default:
            return state;
    }
}