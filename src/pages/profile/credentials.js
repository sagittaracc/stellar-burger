import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmail, getName } from '../../services/user/selectors';
import useForm from '../../hooks/useForm';
import { getUser, updUser } from '../../services/auth/actions';
import FormEditableInput from '../../components/form/form-editable-input';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import SubmitButton from '../../components/form/submit-button';

const Credentials = () => {
    const dispatch = useDispatch();
    const name = useSelector(getName);
    const email = useSelector(getEmail);
    const [password, setPassword] = useState('*****');
    const { touched, field, handleSubmit } = useForm();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    const onSubmit = (form) => {
        dispatch(updUser(form));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormEditableInput {...field("name", name)} type="text" placeholder="Имя" />
            <FormEditableInput {...field("email", email)} type="email" placeholder="E-mail" />
            <FormEditableInput {...field("password", password)} type="password" placeholder="Пароль" />
            {
                touched && (
                    <SubmitButton>Сохранить</SubmitButton>
                )
            }
        </form>
    );
}

export default Credentials;