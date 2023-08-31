import { useSelector } from "react-redux";
import { isFormRequestSelector } from "../../services/form/selectors";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

const FormInput = (props) => {
    const isRequest = useSelector(isFormRequestSelector);

    return (
        <Input disabled={isRequest} extraClass="mb-6" {...props} />
    );
}

export default FormInput;