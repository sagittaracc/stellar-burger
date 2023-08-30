import { post } from "../../utils/api";
import { saveTokens } from "../../utils/token";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";
import { setUser } from "../user/actions";

export const register = ({email, password, name}) => (dispatch) => {
    dispatch({ type: FORM_REQUEST });

    post('/auth/register', { email, password, name })
        .then(response => {
            saveTokens(response);
            dispatch(setUser(response.user));
            dispatch({ type: FORM_SUCCESS });
        })
        .catch((response) => {
            dispatch({ type: FORM_FAIL, payload: response.message });
        })
}