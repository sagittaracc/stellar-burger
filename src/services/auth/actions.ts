import { AppThunk, TDispatch } from "../../types";
import { IAuthError, IAuthSuccess } from "../../types/auth";
import { TUserCredentials, TUserInfo } from "../../types/user";
import { secureGet, securePatch } from "../../utils/api";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";

export const AUTH_REQUEST = 'AUTH/REQUEST';
export const SET_AUTH = 'AUTH/SET';
export const UNSET_AUTH = 'AUTH/UNSET';

export const setUser = (user: TUserInfo): IAuthSuccess => {
    return {
        type: SET_AUTH,
        payload: user
    }
}

export const unsetUser = (): IAuthError => {
    return {
        type: UNSET_AUTH
    }
}

export const getUser: AppThunk = () => (dispatch: TDispatch) => {
    dispatch({ type: AUTH_REQUEST });

    secureGet('/auth/user')
        .then(response => {
            dispatch(setUser(response.user));
        })
        .catch(error => {
            dispatch(unsetUser());
        })
}

export const updUser = (data: TUserCredentials) => (dispatch: TDispatch) => {
    dispatch({ type: FORM_REQUEST });

    securePatch('/auth/user', data)
        .then(response => {
            dispatch(setUser(response.user));
            dispatch({ type: FORM_SUCCESS });
        })
        .catch(error => {
            dispatch(unsetUser());
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}