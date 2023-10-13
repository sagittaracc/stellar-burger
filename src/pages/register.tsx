import { Link } from 'react-router-dom';
import styles from './form.module.css';
import { useSelector } from 'react-redux';
import { register } from '../services/register/actions';
import Alert from '../components/alert/alert';
import useForm from '../hooks/useForm';
import { getFormErrorSelector, isFormRequestSelector } from "../services/form/selectors";
import { FC } from 'react';
import { TFormData } from '../types/form';
import { useDispatch } from '../types';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

const Register: FC = () => {
    const dispatch = useDispatch();
    const isRequest = useSelector(isFormRequestSelector);
    const error = useSelector(getFormErrorSelector);

    const { field, handleSubmit } = useForm();

    const onSubmit = (form: TFormData) => {
        dispatch(register(form));
    }

    return (
        <>
            {error && <Alert message={error} type="danger" />}

            <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
                <h1>Регистрация</h1>

                <Input
                    {...field('name')}
                    type="text"
                    placeholder="Имя"
                    disabled={isRequest}
                    extraClass="mb-6" />
                <Input
                    {...field('email')}
                    type="email"
                    placeholder="E-mail"
                    disabled={isRequest}
                    extraClass="mb-6" />
                <Input
                    {...field('password')}
                    type="password"
                    placeholder="Пароль"
                    icon="HideIcon"
                    disabled={isRequest}
                    extraClass="mb-6" />

                <Button
                    type="primary"
                    disabled={isRequest}
                    htmlType="submit"
                    size="medium"
                    extraClass="mb-6">Зарегистрироваться</Button>

                <p className="text text_type_main-default mt-20">
                    Уже зарегистрированы? <Link to="/login">Войти</Link></p>
            </form>
        </>
    );
}

export default Register;