import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthCheckedSelector, getAuthSuccessSelector } from "../../services/auth/selectors";
import { getUser } from '../../services/auth/actions';

const ProtectedRoute = ({ anonymous = false, component }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const authChecked = useSelector(getAuthCheckedSelector);
    const authSuccess = useSelector(getAuthSuccessSelector);

    useEffect(() => {
        dispatch(getUser());
    }, [])

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

export default ProtectedRoute;