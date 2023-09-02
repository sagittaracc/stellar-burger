export const beginToResetPassword = () => {
    localStorage.setItem('resetPassword', true);
}

export const finishToResetPassword = () => {
    localStorage.removeItem('resetPassword');
}

export const isResetingPassword = () => {
    return localStorage.getItem('resetPassword');
}