export type TModalCallback = () => void;

export type TModalHook = {
    open: boolean;
    openModal: TModalCallback;
    closeModal: TModalCallback;
};
