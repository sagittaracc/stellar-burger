import { post } from "../../utils/api";
import { getRefreshToken, removeTokens } from "../../utils/token";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions"
import { unsetUser } from "../user/actions";

export const logout = () => (dispatch) => {
    dispatch({ type: FORM_REQUEST });

    post('/auth/logout', {token: getRefreshToken()})
        .then(response => {
            removeTokens();
            dispatch(unsetUser());
            dispatch({ type: FORM_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: FORM_FAIL, payload: error.message });
        });
}