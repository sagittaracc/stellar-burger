import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthSelector } from "../../services/user/selectors";

const ProtectedRoute = ({ anonymous = false, children }) => {
    const isAuth = useSelector(isAuthSelector);
    const location = useLocation();

    if (!isAuth && !anonymous) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children;
}

export default ProtectedRoute;