import { useState } from 'react';

/**
 * Пришлось написать свою упрощенную реализацию
 * Не удалось подружить react-hook-form с burger ui kit
 */
const useForm = () => {
    const [form, setForm] = useState({});

    const field = (name) => {
        return {
            name,
            value: form[name] || '',
            onChange: (e) => {
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                })
            }
        }
    }

    return {
        field,
        handleSubmit: (onSubmit) => (e) => {
            e.preventDefault();
            onSubmit(form);
        }
    };
}

export default useForm;