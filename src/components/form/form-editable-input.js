import { useState } from 'react';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

const FormEditableInput = (props) => {
    const [disabled, setDisabled] = useState(true);

    const handleClick = () => {
        setDisabled(!disabled);
    }

    return (
        <Input disabled={disabled} onIconClick={handleClick} icon="EditIcon" extraClass="mb-6" {...props} />
    );
}

export default FormEditableInput;