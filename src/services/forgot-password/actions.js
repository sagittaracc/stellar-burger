import { post } from "../../utils/api";
import { beginToResetPassword } from "../../utils/password";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";

export const forgotPassword = ({email}, gotoResetPasswordPage) => (dispatch) => {
    dispatch({ type: FORM_REQUEST });

    post('/password-reset', { email })
        .then(response => {
            dispatch({ type: FORM_SUCCESS });
            beginToResetPassword();
            gotoResetPasswordPage();
        })
        .catch(error => {
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}