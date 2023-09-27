import { AppThunk, TDispatch } from "../../types";
import { TRegisterForm } from "../../types/form";
import { post } from "../../utils/api";
import { saveTokens } from "../../utils/token";
import { setUser } from "../auth/actions";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";

export const register: AppThunk = ({email, password, name}: TRegisterForm) => (dispatch: TDispatch) => {
    dispatch({ type: FORM_REQUEST });

    post('/auth/register', { email, password, name })
        .then(response => {
            saveTokens(response);
            dispatch(setUser(response.user));
            dispatch({ type: FORM_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}