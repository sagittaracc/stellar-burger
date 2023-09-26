import { FC } from 'react';
import { TAlertComponent } from '../../types/alert';

const Alert: FC<TAlertComponent> = ({message, type}) => {
    return (
        <p className={`alert alert-${type} text_type_main-medium`}>
            {message}
        </p>
    )
}

export default Alert;