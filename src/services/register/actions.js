import { post } from "../../utils/api";
import { saveTokens } from "../../utils/token";
import { setUser } from "../user/actions";

export const REGISTER_REQUEST = 'REGISTER/REQUEST';
export const REGISTER_SUCCESS = 'REGISTER/SUCCESS';
export const REGISTER_FAIL = 'REGISTER/FAIL';

export const register = ({email, password, name}) => (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    post('/auth/register', { email, password, name })
        .then(response => {
            saveTokens(response);
            dispatch(setUser(response.user));
            dispatch({ type: REGISTER_SUCCESS });
        })
        .catch((response) => {
            dispatch({ type: REGISTER_FAIL, payload: response.message });
        })
}