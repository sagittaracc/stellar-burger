import { AppThunk, TDispatch } from "../../types";
import { TLoginForm } from "../../types/form";
import { TTokenResponse } from "../../types/response";
import { post } from "../../utils/api";
import { saveTokens } from "../../utils/token";
import { UNSET_AUTH, setUser } from "../auth/actions";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";

export const login: AppThunk = ({ email, password }: TLoginForm) => (dispatch: TDispatch) => {
    dispatch({ type: FORM_REQUEST });

    post('/auth/login', { email, password })
        .then(response => {
            const authResponse = response as TTokenResponse;
            saveTokens(authResponse);
            dispatch(setUser(authResponse.user));
            dispatch({ type: FORM_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: UNSET_AUTH });
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}