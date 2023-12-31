import styles from './profile.module.css';
import CustomLink from '../../components/custom-link/custom-link';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFormErrorSelector } from '../../services/form/selectors';
import Alert from '../../components/alert/alert';
import { FC } from 'react';

const Profile: FC = () => {
    const error = useSelector(getFormErrorSelector);

    return (
        <>
            {error && <Alert message={error} type="danger" />}

            <div className={`flex h-100 pt-10`}>
                <div className="col mt-20 weight-1">
                    <ul className={`${styles.nav} m-0 p-0 pb-20`}>
                        <li><CustomLink end to="" text="Профиль" size="medium" /></li>
                        <li><CustomLink to="orders" text="История заказов" size="medium" /></li>
                        <li><CustomLink to="logout" text="Выход" size="medium" /></li>
                    </ul>

                    <p className="text text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
                </div>

                <div className="col mt-20 weight-2">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Profile;