import { useSelector } from "react-redux";
import { isFormRequestSelector } from "../../services/form/selectors";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

const SubmitButton = (props) => {
    const isRequest = useSelector(isFormRequestSelector);

    return (
        <Button disabled={isRequest} htmlType="submit" size="medium" extraClass="mb-6" {...props}>
            {props.children}
        </Button>
    );
}

export default SubmitButton;