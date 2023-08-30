import { post } from "../../utils/api";
import { setUser } from "../user/actions";

export const REGISTER_REQUEST = 'REGISTER/REQUEST';
export const REGISTER_SUCCESS = 'REGISTER/SUCCESS';
export const REGISTER_FAIL = 'REGISTER/FAIL';

export const register = (email, password, name) => (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    post('/auth/register', { email, password, name })
        .then(response => {
            if (response.success) {
                dispatch(setUser(response.user));
                dispatch({ type: REGISTER_SUCCESS });
            }
        })
        .catch(error => {
            dispatch({ type: REGISTER_FAIL });
        })
}