import { Link } from 'react-router-dom';
import styles from './form.module.css';
import useForm from '../hooks/useForm';
import FormInput from '../components/form/form-input';
import SubmitButton from '../components/form/submit-button';
import { useDispatch, useSelector } from 'react-redux';
import { getFormErrorSelector } from '../services/form/selectors';
import Alert from '../components/alert/alert';
import { forgotPassword } from '../services/forgot-password/actions';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { TFormData } from '../types/form';

const ForgotPassword: FC = () => {
    const dispatch = useDispatch<any>();
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

                <FormInput {...field('email')} type="email" placeholder="Укажите e-mail" />

                <SubmitButton type="primary">Восстановить</SubmitButton>

                <p className="text text_type_main-default mt-20">
                    Вспомнили пароль? <Link to="/login">Войти</Link></p>
            </form>
        </>
    );
}

export default ForgotPassword;