import ReactDOM from "react-dom";
import Overlay from "./overlay/overlay";
import styles from "./modal.module.css";
import Header from "./header/header";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ header, onClose, children }) => {
    return ReactDOM.createPortal(
        (
            <>
                <div className={styles.modal}>
                    <Header header={header} onClose={onClose} />
                    {children}
                </div>
                <Overlay />
            </>
        ),
        modalRoot
    )
}

Modal.propTypes = {
    header: PropTypes.string,
    onClose: PropTypes.func,
    children: PropTypes.node
};

export default Modal;