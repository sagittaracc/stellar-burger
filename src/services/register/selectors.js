export const isRequestSelector = (store) => store.register.registerRequest;
export const hasErrorSelector = (store) => store.register.registerError;
export const getErrorMessageSelector = (store) => store.register.errorMessage;