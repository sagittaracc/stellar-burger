import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import styles from './form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../services/register/actions';
import Alert from '../components/alert/alert';
import useForm from '../hooks/useForm';
import { getFormErrorSelector, isFormRequestSelector } from "../services/form/selectors";

const Register = () => {
    const dispatch = useDispatch();
    const isRequest = useSelector(isFormRequestSelector);
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
                <Input
                    {...field('name')} disabled={isRequest} type="text" placeholder="Имя"
                    extraClass="mt-6" />
                <Input
                    {...field('email')}
                    disabled={isRequest} type="text" placeholder="E-mail"
                    extraClass="mt-6" />
                <Input
                    {...field('password')}
                    disabled={isRequest} type="password" placeholder="Пароль"
                    extraClass="mt-6" icon="HideIcon" />
                <Button
                    disabled={isRequest} htmlType="submit" type="primary"
                    size="medium" extraClass="mt-6">
                    Зарегистрироваться
                </Button>

                <p className="text text_type_main-default mt-20">
                    Уже зарегистрированы? <Link to="/login">Войти</Link></p>
            </form>
        </>
    );
}

export default Register;