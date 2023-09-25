import { FC } from 'react';

type TAlert = {
    message: string;
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
};

const Alert: FC<TAlert> = ({message, type}) => {
    return (
        <p className={`alert alert-${type} text_type_main-medium`}>
            {message}
        </p>
    )
}

export default Alert;