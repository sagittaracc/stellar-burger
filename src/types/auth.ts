import { AUTH_REQUEST, SET_AUTH, UNSET_AUTH } from "../services/auth/actions";
import { TUserInfo } from "./user";

export type TInitialAuth = {
    authRequest: boolean;
    authChecked: boolean;
    authSuccess: boolean;
    email: string;
    name: string;
};

export interface IAuthRequest {
    readonly type: typeof AUTH_REQUEST;
}

export interface IAuthSuccess {
    readonly type: typeof SET_AUTH;
    payload: TUserInfo;
}

export interface IAuthError {
    readonly type: typeof UNSET_AUTH;
}

export type TAuthAction = IAuthRequest | IAuthSuccess | IAuthError;