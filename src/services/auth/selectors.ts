import { RootState } from "../../types";

export const getAuthRequestSelector = (store: RootState) => store.auth.authRequest;
export const getAuthCheckedSelector = (store: RootState) => store.auth.authChecked;
export const getAuthSuccessSelector = (store: RootState) => store.auth.authSuccess;
export const getEmailSelector = (store: RootState) => store.auth.email;
export const getNameSelector = (store: RootState) => store.auth.name;