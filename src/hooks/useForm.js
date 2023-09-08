import { useState } from 'react';

/**
 * Пришлось написать свою упрощенную реализацию
 * Не удалось подружить react-hook-form с burger ui kit
 */
const useForm = () => {
    const [form, setForm] = useState({});
    const [touched, setTouched] = useState(false);

    const field = (name) => {
        return {
            name,
            value: form[name] || '',
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
        form,
        setForm,
        touched,
        field,
        handleSubmit: (onSubmit) => (e) => {
            e.preventDefault();
            onSubmit(form);
            setTouched(false);
        },
        handleReset: (onReset) => (e) => {
            onReset();
            setTouched(false);
        }
    };
}

export default useForm;