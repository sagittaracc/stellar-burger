import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { TFormData } from '../types/form';

/**
 * Пришлось написать свою упрощенную реализацию
 * Не удалось подружить react-hook-form с burger ui kit
 */
const useForm = () => {
    const [form, setForm] = useState<TFormData>({});
    const [touched, setTouched] = useState(false);

    const field = (name: string) => {
        return {
            name,
            value: form[name] || '',
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
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
        handleSubmit: (onSubmit: (form: object) => void) => (e: SyntheticEvent) => {
            e.preventDefault();
            onSubmit(form);
            setTouched(false);
        },
        handleReset: (onReset: () => void) => () => {
            onReset();
            setTouched(false);
        }
    };
}

export default useForm;