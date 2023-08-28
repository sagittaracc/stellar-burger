import { useState } from 'react';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './form.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={`${styles.form}`}>
            <h1>Вход</h1>

            <Input
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                extraClass="mt-6" />
            <Input
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Пароль"
                name="password"
                value={password}
                extraClass="mt-6"
                icon="HideIcon" />
            <Button htmlType="button" type="primary" size="medium" extraClass="mt-6">
                Войти
            </Button>

            <p className="text text_type_main-default mt-20">
                Вы - новый пользователь? <a href="#">Зарегистрироваться</a></p>
            <p className="text text_type_main-default mt-4">
                Забыли пароль? <a href="#">Восстановить пароль</a></p>
        </div>
    );
}

export default Login;