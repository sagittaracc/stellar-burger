import { useState } from 'react';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import styles from './form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorMessageSelector, hasErrorSelector, isRequestSelector } from '../services/register/selectors';
import { register } from '../services/register/actions';

const Register = () => {
    const dispatch = useDispatch();
    const isRequest = useSelector(isRequestSelector);
    const hasError = useSelector(hasErrorSelector);
    const errorMessage = useSelector(getErrorMessageSelector);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const doRegister = () => {
        dispatch(register(email, password, name));
    }

    return (
        <div className={`${styles.form}`}>
            {
                hasError && <p className="alert alert-danger text_type_main-medium">{errorMessage}</p>
            }
            <h1>Регистрация</h1>
            <Input
                disabled={isRequest}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Имя"
                name="name"
                value={name}
                extraClass="mt-6" />
            <Input
                disabled={isRequest}
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder="E-mail"
                name="email"
                value={email}
                extraClass="mt-6" />
            <Input
                disabled={isRequest}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Пароль"
                name="password"
                value={password}
                extraClass="mt-6"
                icon="HideIcon" />
            <Button disabled={isRequest} onClick={doRegister} htmlType="button" type="primary" size="medium" extraClass="mt-6">
                Зарегистрироваться
            </Button>

            <p className="text text_type_main-default mt-20">
                Уже зарегистрированы? <Link to="/login">Войти</Link></p>
        </div>
    );
}

export default Register;