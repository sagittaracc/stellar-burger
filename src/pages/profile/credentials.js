import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { updUser } from '../../services/auth/actions';
import SubmitButton from '../../components/form/submit-button';
import CancelButton from '../../components/form/cancel-button';
import { getEmailSelector, getNameSelector } from '../../services/auth/selectors';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

const Credentials = () => {
    const dispatch = useDispatch();
    const name = useSelector(getNameSelector);
    const email = useSelector(getEmailSelector);
    const { form, setForm, touched, field, handleSubmit, handleReset } = useForm();

    useEffect(() => {
        setForm({
            ...form,
            name,
            email,
            password: ''
        })
    }, [name, email]);

    const onSubmit = (form) => {
        dispatch(updUser(form));
    }

    const onReset = () => {
        setForm({
            ...form,
            name,
            email,
            password: ''
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={handleReset(onReset)}>
            <Input {...field("name")} type="text" placeholder="Имя" icon="EditIcon" extraClass="mb-6" />
            <Input {...field("email")} type="email" placeholder="E-mail" icon="EditIcon" extraClass="mb-6" />
            <Input {...field("password")} type="password" placeholder="Пароль" icon="EditIcon" extraClass="mb-6" />
            {
                touched && (
                    <div className='text-right'>
                        <SubmitButton>Сохранить</SubmitButton>
                        <CancelButton>Отмена</CancelButton>
                    </div>
                )
            }
        </form>
    );
}

export default Credentials;