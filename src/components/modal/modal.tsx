import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import Overlay from "./overlay/overlay";
import styles from "./modal.module.css";
import Header from "./header/header";
import { FC } from 'react';
import { TModalWindow } from "../../types/modal";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

const Modal: FC<TModalWindow> = ({ header, onClose, children }) => {
    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    }

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener('keydown', handleKeyPress)
    }, [])

    return ReactDOM.createPortal(
        (
            <>
                <div className={styles.modal}>
                    <Header header={header} onClose={onClose} />
                    {children}
                </div>
                <Overlay onClose={onClose} />
            </>
        ),
        modalRoot
    )
}

export default Modal;