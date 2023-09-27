import { AppThunk, TDispatch } from "../../types";
import { TRegisterForm } from "../../types/form";
import { TTokenResponse } from "../../types/response";
import { post } from "../../utils/api";
import { saveTokens } from "../../utils/token";
import { setUser } from "../auth/actions";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";

export const register: AppThunk = ({email, password, name}: TRegisterForm) => (dispatch: TDispatch) => {
    dispatch({ type: FORM_REQUEST });

    post('/auth/register', { email, password, name })
        .then(response => {
            const authResponse = response as TTokenResponse;
            saveTokens(authResponse);
            dispatch(setUser(authResponse.user));
            dispatch({ type: FORM_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}