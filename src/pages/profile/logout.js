import { useDispatch } from 'react-redux';
import { logout } from '../../services/logout/logout';
import { useEffect } from 'react';

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
    }, []);

    return (
        <>
        </>
    );
}

export default Logout;