import { useState } from 'react';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

const Credentials = () => {
    const [name, setName] = useState('Марк');
    const [login, setLogin] = useState('mail@stellar.burger');
    const [password, setPassword] = useState('11111');

    return (
        <>
            <Input
                onChange={e => setName(e.target.value)}
                type="text"
                disabled={true}
                placeholder="Имя"
                name="name"
                value={name}
                onIconClick={() => alert('click')}
                icon="EditIcon" />
            <Input
                onChange={e => setLogin(e.target.value)}
                type="text"
                disabled={true}
                placeholder="Логин"
                name="login"
                value={login}
                onIconClick={() => alert('click')}
                icon="EditIcon"
                extraClass="mt-6" />
            <Input
                onChange={e => setPassword(e.target.value)}
                type="password"
                disabled={true}
                placeholder="Пароль"
                name="password"
                value={password}
                onIconClick={() => alert('click')}
                icon="EditIcon"
                extraClass="mt-6" />
        </>
    );
}

export default Credentials;