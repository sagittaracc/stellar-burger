import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmail, getName } from '../../services/user/selectors';
import useForm from '../../hooks/useForm';
import { getUser, updUser } from '../../services/auth/actions';
import FormEditableInput from '../../components/form/form-editable-input';
import SubmitButton from '../../components/form/submit-button';
import { isFormRequestSelector } from '../../services/form/selectors';

const Credentials = () => {
    const dispatch = useDispatch();
    const name = useSelector(getName);
    const email = useSelector(getEmail);
    const { form, setForm, touched, field, handleSubmit } = useForm();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    useEffect(() => {
        setForm({
            ...form,
            name,
            email,
            password: '*****'
        })
    }, [name, email]);

    const onSubmit = (form) => {
        dispatch(updUser(form));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormEditableInput {...field("name")} type="text" placeholder="Имя" />
            <FormEditableInput {...field("email")} type="email" placeholder="E-mail" />
            <FormEditableInput {...field("password")} type="password" placeholder="Пароль" />
            {
                touched && (
                    <SubmitButton>Сохранить</SubmitButton>
                )
            }
        </form>
    );
}

export default Credentials;