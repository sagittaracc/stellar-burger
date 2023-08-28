import { useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './form.module.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    return (
        <div className={`${styles.form}`}>
            <h1>Восстановление пароля</h1>

            <Input
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder="Укажите e-mail"
                name="email"
                value={email}
                extraClass="mt-6" />
            <Button htmlType="button" type="primary" size="medium" extraClass="mt-6">
                Восстановить
            </Button>

            <p className="text text_type_main-default mt-20">
                Вспомнили пароль? <Link to="/login">Войти</Link></p>
        </div>
    );
}

export default ForgotPassword;