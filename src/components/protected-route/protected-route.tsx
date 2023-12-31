import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthCheckedSelector, getAuthSuccessSelector } from "../../services/auth/selectors";
import { getUser } from '../../services/auth/actions';
import { FC } from 'react';
import { TProtectedRouteComponent } from '../../types/protected-route';
import { useDispatch } from '../../types';

export const ProtectedRoute: FC<TProtectedRouteComponent> = ({ anonymous = false, component }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const authChecked = useSelector(getAuthCheckedSelector);
    const authSuccess = useSelector(getAuthSuccessSelector);

    useEffect(() => {
        dispatch(getUser());
    }, []);

    if (!authChecked) {
        return null;
    }

    if (!authSuccess && !anonymous) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    if (authSuccess && anonymous) {
        const { from } = location.state || { from: { pathname: '/' } };
        return <Navigate to={from} />
    }

    return component;
}