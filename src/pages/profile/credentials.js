import { useEffect } from 'react';
import { secureGet } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../services/user/actions';
import { getEmail, getName } from '../../services/user/selectors';
import useForm from '../../hooks/useForm';
import FormInput from '../../components/form/form-input';

const Credentials = () => {
    const dispatch = useDispatch();
    const name = useSelector(getName);
    const email = useSelector(getEmail);
    const { field } = useForm();

    useEffect(() => {
        secureGet('/auth/user')
            .then(response => {
                dispatch(setUser(response.user));
            })
    }, []);

    return (
        <>
            <FormInput {...field("name")} type="text" placeholder="Имя" disabled={true} value={name} onIconClick={() => alert('click')} icon="EditIcon" />
            <FormInput {...field("email")} type="email" disabled={true} placeholder="E-mail" value={email} onIconClick={() => alert('click')} icon="EditIcon" />
            <FormInput {...field("password")} type="password" disabled={true} placeholder="Пароль" value={'11111'} onIconClick={() => alert('click')} icon="EditIcon" />
        </>
    );
}

export default Credentials;