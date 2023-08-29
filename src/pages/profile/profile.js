import styles from './profile.module.css';
import NavLink from '../../components/nav-link/nav-link';
import Credentials from './credentials';

const Profile = () => {
    return (
        <div className={`${styles.profile} flex`}>
            <div className="col">
                <ul className={`${styles.nav} m-0 p-0 pb-20`}>
                    <li><NavLink to="/profile" exact text="Профиль" size="medium" /></li>
                    <li><NavLink to="/profile/orders" exact text="История заказов" size="medium" /></li>
                    <li><NavLink to="/profile/logout" text="Выход" size="medium"/></li>
                </ul>
                <p className="text text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <div className="col">
                <Credentials />
            </div>
            <div className="col"></div>
        </div>
    );
}

export default Profile;