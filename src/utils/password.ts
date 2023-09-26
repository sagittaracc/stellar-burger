export const beginToResetPassword = () => {
    localStorage.setItem('resetPassword', 'yes');
}

export const finishToResetPassword = () => {
    localStorage.removeItem('resetPassword');
}

export const isResetingPassword = () => {
    return localStorage.getItem('resetPassword');
}