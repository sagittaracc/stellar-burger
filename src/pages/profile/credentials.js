import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmail, getName } from '../../services/user/selectors';
import useForm from '../../hooks/useForm';
import FormInput from '../../components/form/form-input';
import { getUser } from '../../services/auth/actions';

const Credentials = () => {
    const dispatch = useDispatch();
    const name = useSelector(getName);
    const email = useSelector(getEmail);
    const { field } = useForm();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    return (
        <>
            <FormInput {...field("name")} type="text" placeholder="Имя" disabled={true} value={name} onIconClick={() => alert('click')} icon="EditIcon" />
            <FormInput {...field("email")} type="email" placeholder="E-mail" disabled={true} value={email} onIconClick={() => alert('click')} icon="EditIcon" />
            <FormInput {...field("password")} type="password" placeholder="Пароль" disabled={true} value={'11111'} onIconClick={() => alert('click')} icon="EditIcon" />
        </>
    );
}

export default Credentials;