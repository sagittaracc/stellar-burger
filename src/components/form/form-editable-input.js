import { useState } from 'react';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

const FormEditableInput = (props) => {
    const [disabled, setDisabled] = useState(true);

    const handleClick = () => {
        setDisabled(false);
    }

    return (
        <Input disabled={disabled} onIconClick={handleClick} icon="EditIcon" extraClass="mt-6" {...props} />
    );
}

export default FormEditableInput;