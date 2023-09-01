import { useSelector } from "react-redux";
import { isFormRequestSelector } from "../../services/form/selectors";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

const CancelButton = (props) => {
    const isRequest = useSelector(isFormRequestSelector);

    return (
        <Button disabled={isRequest} htmlType="reset" size="medium" extraClass="mb-6 ml-6" {...props}>
            {props.children}
        </Button>
    );
}

export default CancelButton;