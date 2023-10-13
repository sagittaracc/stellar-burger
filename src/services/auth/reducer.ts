import { TAuthAction, TInitialAuth } from '../../types/auth';
import {
    AUTH_REQUEST,
    SET_AUTH,
    UNSET_AUTH
} from './actions';

export const initialAuth: TInitialAuth = {
    authRequest: false,
    authChecked: false,
    authSuccess: false,
    email: '',
    name: ''
};

export const authReducer = (state = initialAuth, action: TAuthAction) => {
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