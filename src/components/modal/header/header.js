import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header.module.css";
import PropTypes from "prop-types";

const Header = ({header, onClose}) => {
    return (
        <div className={`mt-10 mr-10 ml-10 text text_type_main-large ${styles.header}`}>
            {header}
            <span className="float-right" onClick={onClose}>
                <CloseIcon type="primary" />
            </span>
        </div>
    )
}

Header.propTypes = {
    header: PropTypes.string,
    onClose: PropTypes.func
};

export default Header;