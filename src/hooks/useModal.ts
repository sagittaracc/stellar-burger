import { useState, useCallback } from "react";
import { TModalCallback } from "../types/modal";

const useModal = () => {
    const [open, setOpen] = useState<boolean>(false);

    const openModal: TModalCallback = useCallback<TModalCallback>(() => {
        setOpen(true);
    }, [])

    const closeModal: TModalCallback = useCallback<TModalCallback>(() => {
        setOpen(false);
    }, [])

    return {
        open,
        openModal,
        closeModal
    };
}

export default useModal;