import { useDispatch } from 'react-redux';
import { logout } from '../../services/logout/logout';
import { useEffect, FC } from 'react';

const Logout: FC = () => {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(logout());
    }, []);

    return (
        <>
        </>
    );
}

export default Logout;