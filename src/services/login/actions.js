import { post } from "../../utils/api";
import { saveTokens } from "../../utils/token";
import { AUTH_REQUEST, UNSET_AUTH, setUser } from "../auth/actions";

export const login = ({ email, password }) => (dispatch) => {
    dispatch({ type: AUTH_REQUEST });

    post('/auth/login', { email, password })
        .then(response => {
            saveTokens(response);
            dispatch(setUser(response.user));
        })
        .catch(error => {
            dispatch({ type: UNSET_AUTH });
        })
}