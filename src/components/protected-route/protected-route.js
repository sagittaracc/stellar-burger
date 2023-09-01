import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthCheckedSelector, getAuthSuccessSelector } from "../../services/auth/selectors";
import { getUser } from '../../services/auth/actions';

const ProtectedRoute = ({ anonymous = false, children }) => {
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

    return children;
}

export default ProtectedRoute;