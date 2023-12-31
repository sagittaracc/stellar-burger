import { Link } from 'react-router-dom';
import styles from './form.module.css';
import useForm from '../hooks/useForm';
import { useSelector } from 'react-redux';
import { getFormErrorSelector, isFormRequestSelector } from '../services/form/selectors';
import Alert from '../components/alert/alert';
import { resetPassword } from '../services/reset-password/actions';
import { useNavigate } from 'react-router-dom';
import { isResetingPassword } from '../utils/password';
import { useEffect } from 'react';
import { FC } from 'react';
import { TFormData } from '../types/form';
import { useDispatch } from '../types';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

const ResetPassword: FC = () => {
    const dispatch = useDispatch();
    const isRequest = useSelector(isFormRequestSelector);
    const error = useSelector(getFormErrorSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isResetingPassword()) {
            navigate('/forgot-password');
        }
    }, [])

    const { field, handleSubmit } = useForm();

    const onSubmit = (form: TFormData) => {
        dispatch(resetPassword(form, () => navigate('/')));
    }

    return (
        <>
            { error && <Alert message={error} type="danger" /> }

            <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
                <h1>Восстановление пароля</h1>

                <Input
                    {...field('password')}
                    type="password"
                    placeholder="Введите новый пароль"
                    icon="HideIcon"
                    disabled={isRequest}
                    extraClass="mb-6" />
                <Input
                    {...field('token')}
                    type="text"
                    placeholder="Введите код из письма"
                    disabled={isRequest}
                    extraClass="mb-6" />

                <Button
                    type="primary"
                    disabled={isRequest}
                    htmlType="submit"
                    size="medium"
                    extraClass="mb-6">Сохранить</Button>

                <p className="text text_type_main-default mt-20">
                    Вспомнили пароль? <Link to="/login">Войти</Link></p>
            </form>
        </>
    );
}

export default ResetPassword;