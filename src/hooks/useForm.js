import { useState } from 'react';

/**
 * Пришлось написать свою упрощенную реализацию
 * Не удалось подружить react-hook-form с burger ui kit
 */
const useForm = () => {
    const [form, setForm] = useState({});
    const [touched, setTouched] = useState(false);

    const field = (name, value) => {
        return {
            name,
            value: form[name] || value || '',
            onChange: (e) => {
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                });
                setTouched(true);
            }
        }
    }

    return {
        touched,
        field,
        handleSubmit: (onSubmit) => (e) => {
            e.preventDefault();
            onSubmit(form);
            setTouched(false);
        }
    };
}

export default useForm;