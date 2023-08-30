import { post } from "../../utils/api";
import { saveTokens } from "../../utils/token";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions"
import { setUser } from "../user/actions";

export const login = ({ email, password }) => (dispatch) => {
    dispatch({ type: FORM_REQUEST });

    post('/auth/login', { email, password })
        .then(response => {
            saveTokens(response);
            dispatch(setUser(response.user));
            dispatch({ type: FORM_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}