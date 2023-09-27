import { AppThunk, TDispatch } from "../../types";
import { post } from "../../utils/api";
import { getRefreshToken, removeTokens } from "../../utils/token";
import { AUTH_REQUEST, UNSET_AUTH, unsetUser } from "../auth/actions";

export const logout: AppThunk = () => (dispatch: TDispatch) => {
    dispatch({ type: AUTH_REQUEST });

    post('/auth/logout', {token: getRefreshToken()})
        .then(response => {
            removeTokens();
            dispatch(unsetUser());
        })
        .catch(error => {
            dispatch({ type: UNSET_AUTH });
        });
}