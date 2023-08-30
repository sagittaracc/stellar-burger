import { Link } from 'react-router-dom';
import styles from './form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../services/register/actions';
import Alert from '../components/alert/alert';
import useForm from '../hooks/useForm';
import { getFormErrorSelector } from "../services/form/selectors";
import FormInput from "../components/form/form-input";
import SubmitButton from "../components/form/submit-button";

const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(getFormErrorSelector);

    const form = useForm();
    const {field, handleSubmit} = form;

    const onSubmit = (data) => {
        dispatch(register(data));
    }

    return (
        <>
            { error && <Alert message={error} type="danger" /> }
            <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
                <h1>Регистрация</h1>
                <FormInput {...field('name')} type="text" placeholder="Имя"  />
                <FormInput {...field('email')} type="email" placeholder="E-mail" />
                <FormInput {...field('password')} type="password" placeholder="Пароль" icon="HideIcon" />
                <SubmitButton type="primary">Зарегистрироваться</SubmitButton>

                <p className="text text_type_main-default mt-20">
                    Уже зарегистрированы? <Link to="/login">Войти</Link></p>
            </form>
        </>
    );
}

export default Register;