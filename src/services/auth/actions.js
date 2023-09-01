import { secureGet, securePatch } from "../../utils/api";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";

export const AUTH_REQUEST = 'AUTH/REQUEST';
export const SET_AUTH = 'AUTH/SET';
export const UNSET_AUTH = 'AUTH/UNSET';

export const setUser = ({ email, name }) => {
    return {
        type: SET_AUTH,
        payload: {
            email,
            name
        }
    }
}

export const unsetUser = () => {
    return {
        type: UNSET_AUTH
    }
}

export const getUser = () => (dispatch) => {
    dispatch({ type: AUTH_REQUEST });

    secureGet('/auth/user')
        .then(response => {
            dispatch(setUser(response.user));
        })
        .catch(error => {
            dispatch({ type: UNSET_AUTH });
        })
}

export const updUser = (data) => (dispatch) => {
    dispatch({ type: FORM_REQUEST });

    securePatch('/auth/user', data)
        .then(response => {
            dispatch(setUser(response.user));
            dispatch({ type: FORM_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: UNSET_AUTH });
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}