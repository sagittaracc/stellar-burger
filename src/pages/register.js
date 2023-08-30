import { useState } from 'react';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import styles from './form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../services/register/actions';
import Alert from '../components/alert/alert';
import { isRequestSelector, getErrorSelector } from '../services/form/selectors';

const Register = () => {
    const dispatch = useDispatch();
    const isRequest = useSelector(isRequestSelector);
    const error = useSelector(getErrorSelector);

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const doRegister = () => {
        dispatch(register(form));
    }

    return (
        <>
            { error && <Alert message={error} type="danger" /> }
            <div className={`${styles.form}`}>
                <h1>Регистрация</h1>
                <Input
                    disabled={isRequest} onChange={handleChange} type="text" placeholder="Имя"
                    name="name" value={form.name} extraClass="mt-6" />
                <Input
                    disabled={isRequest} onChange={handleChange} type="text" placeholder="E-mail"
                    name="email" value={form.email} extraClass="mt-6" />
                <Input
                    disabled={isRequest} onChange={handleChange} type="password" placeholder="Пароль"
                    name="password" value={form.password} extraClass="mt-6" icon="HideIcon" />
                <Button
                    disabled={isRequest} onClick={doRegister} htmlType="button" type="primary"
                    size="medium" extraClass="mt-6">
                    Зарегистрироваться
                </Button>

                <p className="text text_type_main-default mt-20">
                    Уже зарегистрированы? <Link to="/login">Войти</Link></p>
            </div>
        </>
    );
}

export default Register;