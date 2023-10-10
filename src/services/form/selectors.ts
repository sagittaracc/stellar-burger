import { RootState } from "../../types";

export const isFormRequestSelector = (store: RootState) => store.form.isRequest;
export const getFormErrorSelector = (store: RootState) => store.form.error;