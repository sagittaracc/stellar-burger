import { AppThunk, TDispatch } from "../../types";
import { TResetPasswordForm } from "../../types/form";
import { post } from "../../utils/api";
import { finishToResetPassword } from "../../utils/password";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";

export const resetPassword: AppThunk = ({password, token}: TResetPasswordForm, gotoHomePage: () => void) => (dispatch: TDispatch) => {
    dispatch({ type: FORM_REQUEST });

    post('/password-reset/reset', { password, token })
        .then(response => {
            dispatch({ type: FORM_SUCCESS });
            finishToResetPassword();
            gotoHomePage();
        })
        .catch(error => {
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}