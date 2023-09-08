import { post } from "../../utils/api";
import { saveTokens } from "../../utils/token";
import { UNSET_AUTH, setUser } from "../auth/actions";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";

export const login = ({ email, password }) => (dispatch) => {
    dispatch({ type: FORM_REQUEST });

    post('/auth/login', { email, password })
        .then(response => {
            saveTokens(response);
            dispatch(setUser(response.user));
            dispatch({ type: FORM_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: UNSET_AUTH });
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}