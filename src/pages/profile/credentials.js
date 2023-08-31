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
            <FormEditableInput {...field("name")} type="text" placeholder="Имя" value={name} />
            <FormEditableInput {...field("email")} type="email" placeholder="E-mail" value={email} />
            <FormEditableInput {...field("password")} type="password" placeholder="Пароль" value={password} />
        </>
    );
}

export default Credentials;