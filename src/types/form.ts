import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../services/form/actions";

export type TFormData = Record<string, string>;

export type TForgotPasswordForm = {
    email: string;
};

export type TLoginForm = {
    email: string;
    password: string;
};

export type TRegisterForm = {
    email: string;
    password: string;
    name: string;
};

export type TResetPasswordForm = {
    password: string;
    token: string;
};

export type TInitialForm = {
    isRequest: boolean;
    error: string;
};

export interface IFormRequest {
    readonly type: typeof FORM_REQUEST;
}

export interface IFormSuccess {
    readonly type: typeof FORM_SUCCESS;
}

export interface IFormFail {
    readonly type: typeof FORM_FAIL;
    payload: string;
}

export type TFormAction = IFormRequest | IFormSuccess | IFormFail;