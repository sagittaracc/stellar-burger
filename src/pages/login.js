import { Link } from 'react-router-dom';
import styles from './form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFormErrorSelector } from '../services/form/selectors';
import useForm from '../hooks/useForm';
import { login } from '../services/login/actions';
import Alert from '../components/alert/alert';
import FormInput from '../components/form/form-input';
import SubmitButton from '../components/form/submit-button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector(getFormErrorSelector);

    const { field, handleSubmit } = useForm();

    const onSubmit = (form) => {
        dispatch(login(form));
    }

    return (
        <>
            {error && <Alert message={error} type="danger" />}

            <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
                <h1>Вход</h1>

                <FormInput {...field('email')} type="email" placeholder="E-mail" />
                <FormInput {...field('password')} type="password" placeholder="Пароль" icon="HideIcon" />

                <SubmitButton type="primary">Войти</SubmitButton>

                <p className="text text_type_main-default mt-20">
                    Вы - новый пользователь? <Link to="/register">Зарегистрироваться</Link></p>
                <p className="text text_type_main-default mt-4">
                    Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link></p>
            </form>
        </>
    );
}

export default Login;