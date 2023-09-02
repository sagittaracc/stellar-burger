import { post } from "../../utils/api";
import { finishToResetPassword } from "../../utils/password";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";

export const resetPassword = ({password, token}, gotoHomePage) => (dispatch) => {
    dispatch({ type: FORM_REQUEST });
    finishToResetPassword();

    post('/password-reset/reset', { password, token })
        .then(response => {
            dispatch({ type: FORM_SUCCESS });
            gotoHomePage();
        })
        .catch(error => {
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}