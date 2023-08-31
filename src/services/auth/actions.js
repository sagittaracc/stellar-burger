import { secureGet, securePatch } from "../../utils/api";
import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../form/actions";
import { setUser } from "../user/actions";

export const getUser = () => (dispatch) => {
    dispatch({ type: FORM_REQUEST });

    secureGet('/auth/user')
        .then(response => {
            dispatch(setUser(response.user));
            dispatch({ type: FORM_SUCCESS })
        })
        .catch(error => {
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}

export const updUser = (data) => (dispatch) => {
    dispatch({ type: FORM_REQUEST });

    securePatch('/auth/user', data)
        .then(response => {
            dispatch(setUser(response.user));
            dispatch({ type: FORM_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: FORM_FAIL, payload: error.message });
        })
}