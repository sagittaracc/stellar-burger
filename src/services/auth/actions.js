import { secureGet, securePatch } from "../../utils/api";

export const AUTH_REQUEST = 'AUTH/REQUEST';
export const SET_AUTH = 'AUTH/SET';
export const UNSET_AUTH = 'AUTH/UNSET';

export const setUser = ({email, name}) => {
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
    dispatch({ type: AUTH_REQUEST });

    securePatch('/auth/user', data)
        .then(response => {
            dispatch(setUser(response.user));
        })
        .catch(error => {
            dispatch({ type: UNSET_AUTH });
        })
}