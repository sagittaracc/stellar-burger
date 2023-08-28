import { useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './form.module.css';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');

    return (
        <div className={`${styles.form}`}>
            <h1>Восстановление пароля</h1>

            <Input
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Пароль"
                name="password"
                value={password}
                extraClass="mt-6"
                icon="HideIcon" />
            <Input
                onChange={e => setCode(e.target.value)}
                type="text"
                placeholder="Введите код из письма"
                name="code"
                value={code}
                extraClass="mt-6" />
            <Button htmlType="button" type="primary" size="medium" extraClass="mt-6">
                Сохранить
            </Button>

            <p className="text text_type_main-default mt-20">
                Вспомнили пароль? <Link to="/login">Войти</Link></p>
        </div>
    );
}

export default ResetPassword;