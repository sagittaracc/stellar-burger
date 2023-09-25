import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../services/form/actions";

export type TForgotPasswordForm = {
    email: string;
};

export type TInitialForm = {
    isRequest: boolean;
    error: boolean;
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