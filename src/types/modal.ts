import { ReactNode } from "react";

export type TModalCallback = () => void;

export type TModalHook = {
    open: boolean;
    openModal: TModalCallback;
    closeModal: TModalCallback;
};

export type TModalHeader = {
    header?: string;
    onClose: () => void;
};

export type TModalOverlay = {
    onClose: () => void;
};

export type TModalWindow = TModalHeader & {
    children: ReactNode;
};