import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmail, getName } from '../../services/user/selectors';
import useForm from '../../hooks/useForm';
import { getUser } from '../../services/auth/actions';
import FormEditableInput from '../../components/form/form-editable-input';

const Credentials = () => {
    const dispatch = useDispatch();
    const name = useSelector(getName);
    const email = useSelector(getEmail);
    const [password, setPassword] = useState('*****');
    const { field } = useForm();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    return (
        <>
            <FormEditableInput {...field("name", name)} type="text" placeholder="Имя" />
            <FormEditableInput {...field("email", email)} type="email" placeholder="E-mail" />
            <FormEditableInput {...field("password", password)} type="password" placeholder="Пароль" />
        </>
    );
}

export default Credentials;