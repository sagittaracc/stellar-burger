import { Link } from 'react-router-dom';
import styles from './form.module.css';
import { useSelector } from 'react-redux';
import { getFormErrorSelector, isFormRequestSelector } from '../services/form/selectors';
import useForm from '../hooks/useForm';
import { login } from '../services/login/actions';
import Alert from '../components/alert/alert';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { TFormData } from '../types/form';
import { useDispatch } from '../types';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

const Login: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isRequest = useSelector(isFormRequestSelector);
    const error = useSelector(getFormErrorSelector);

    const { field, handleSubmit } = useForm();

    const onSubmit = (form: TFormData) => {
        dispatch(login(form));
    }

    return (
        <>
            {error && <Alert message={error} type="danger" />}

            <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
                <h1>Вход</h1>

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
                    extraClass="mb-6">Войти</Button>

                <p className="text text_type_main-default mt-20">
                    Вы - новый пользователь? <Link to="/register">Зарегистрироваться</Link></p>
                <p className="text text_type_main-default mt-4">
                    Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link></p>
            </form>
        </>
    );
}

export default Login;