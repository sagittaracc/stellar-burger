import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header.module.css";
import { FC } from 'react';
import { TModalHeader } from "../../../types/modal";

const Header: FC<TModalHeader> = ({header, onClose}) => {
    return (
        <div className={`mt-10 mr-10 ml-10 text text_type_main-large ${styles.header}`}>
            {header}
            <span className="float-right" onClick={onClose}>
                <CloseIcon type="primary" />
            </span>
        </div>
    )
}

export default Header;