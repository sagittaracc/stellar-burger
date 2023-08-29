import styles from './profile.module.css';
import CustomLink from '../../components/custom-link/custom-link';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div className={`${styles.profile} flex`}>
            <div className="col">
                <ul className={`${styles.nav} m-0 p-0 pb-20`}>
                    <li><CustomLink end to="" text="Профиль" size="medium" /></li>
                    <li><CustomLink to="orders" text="История заказов" size="medium" /></li>
                    <li><CustomLink to="logout" text="Выход" size="medium"/></li>
                </ul>
                <p className="text text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <div className="col">
                <Outlet />
            </div>
            <div className="col"></div>
        </div>
    );
}

export default Profile;