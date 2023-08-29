import { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './profile.module.css';

const Profile = () => {
    const [name, setName] = useState('Марк');
    const [login, setLogin] = useState('mail@stellar.burger');
    const [password, setPassword] = useState('11111');

    return (
        <div className={`${styles.profile} flex`}>
            <div className="col">
                <ul className={`${styles.nav} text text_type_main-medium pb-20`}>
                    <li>Профиль</li>
                    <li className="text_color_inactive">История заказов</li>
                    <li className="text_color_inactive">Выход</li>
                </ul>
                <p className="text text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <div className="col">
                <Input
                    onChange={e => setName(e.target.value)}
                    type="text"
                    disabled={true}
                    placeholder="Имя"
                    name="name"
                    value={name}
                    onIconClick={() => alert('click')}
                    icon="EditIcon" />
                <Input
                    onChange={e => setLogin(e.target.value)}
                    type="text"
                    disabled={true}
                    placeholder="Логин"
                    name="login"
                    value={login}
                    onIconClick={() => alert('click')}
                    icon="EditIcon"
                    extraClass="mt-6" />
                <Input
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    disabled={true}
                    placeholder="Пароль"
                    name="password"
                    value={password}
                    onIconClick={() => alert('click')}
                    icon="EditIcon"
                    extraClass="mt-6" />
            </div>
            <div className="col"></div>
        </div>
    );
}

export default Profile;