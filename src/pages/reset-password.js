import { Link } from 'react-router-dom';
import styles from './form.module.css';
import useForm from '../hooks/useForm';
import FormInput from '../components/form/form-input';
import SubmitButton from '../components/form/submit-button';
import { useDispatch, useSelector } from 'react-redux';
import { getFormErrorSelector } from '../services/form/selectors';
import Alert from '../components/alert/alert';
import { resetPassword } from '../services/reset-password/actions';
import { useNavigate } from 'react-router-dom';
import { isResetingPassword } from '../utils/password';
import { useEffect } from 'react';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const error = useSelector(getFormErrorSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isResetingPassword()) {
            navigate('/forgot-password');
        }
    }, [])

    const { field, handleSubmit } = useForm();

    const onSubmit = (form) => {
        dispatch(resetPassword(form, () => navigate('/')));
    }

    return (
        <>
            { error && <Alert message={error} type="danger" /> }

            <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
                <h1>Восстановление пароля</h1>

                <FormInput {...field('password')} type="password" placeholder="Введите новый пароль" icon="HideIcon" />
                <FormInput {...field('token')} type="text" placeholder="Введите код из письма" />

                <SubmitButton type="primary">Сохранить</SubmitButton>

                <p className="text text_type_main-default mt-20">
                    Вспомнили пароль? <Link to="/login">Войти</Link></p>
            </form>
        </>
    );
}

export default ResetPassword;