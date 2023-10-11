import { logout } from '../../services/logout/logout';
import { useEffect, FC } from 'react';
import { useDispatch } from '../../types';

const Logout: FC = () => {
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