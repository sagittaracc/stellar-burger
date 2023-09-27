import { PropsWithChildren } from "react";

export type TModalCallback = () => void;

export interface IModalHook {
    open: boolean;
    openModal: TModalCallback;
    closeModal: TModalCallback;
};

export type TModalHeader = {
    header?: string;
    onClose: TModalCallback;
};

export type TModalOverlay = {
    onClose: TModalCallback;
};

export type TModalWindow = PropsWithChildren<TModalHeader>;