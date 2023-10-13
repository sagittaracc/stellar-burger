import { Link } from 'react-router-dom';
import styles from './form.module.css';
import useForm from '../hooks/useForm';
import { useSelector } from 'react-redux';
import { getFormErrorSelector, isFormRequestSelector } from '../services/form/selectors';
import Alert from '../components/alert/alert';
import { forgotPassword } from '../services/forgot-password/actions';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { TFormData } from '../types/form';
import { useDispatch } from '../types';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

const ForgotPassword: FC = () => {
    const dispatch = useDispatch();
    const isRequest = useSelector(isFormRequestSelector);
    const error = useSelector(getFormErrorSelector);
    const navigate = useNavigate();

    const { field, handleSubmit } = useForm();

    const onSubmit = (form: TFormData) => {
        dispatch(forgotPassword(form, () => navigate('/reset-password')));
    }

    return (
        <>
            {error && <Alert message={error} type="danger" />}

            <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
                <h1>Восстановление пароля</h1>

                <Input
                    {...field('email')}
                    type="email"
                    placeholder="Укажите e-mail"
                    disabled={isRequest}
                    extraClass="mb-6" />

                <Button
                    type="primary"
                    disabled={isRequest}
                    htmlType="submit"
                    size="medium"
                    extraClass="mb-6">Восстановить</Button>

                <p className="text text_type_main-default mt-20">
                    Вспомнили пароль? <Link to="/login">Войти</Link></p>
            </form>
        </>
    );
}

export default ForgotPassword;