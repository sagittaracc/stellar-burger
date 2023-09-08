import Cookies from 'js-cookie';
import { post } from './api';

const ACCESS_TOKEN_LIFETIME = 20; // в минутах

export const saveTokens = ({ accessToken, refreshToken }) => {
    Cookies.set('accessToken', accessToken, { expires: ACCESS_TOKEN_LIFETIME / 1440 });
    localStorage.setItem('refreshToken', refreshToken);
}

export const removeTokens = () => {
    Cookies.remove('accessToken');
    localStorage.removeItem('refreshToken');
}

export const getAccessToken = () => {
    return Cookies.get('accessToken');
}

export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
}

export const refreshTokenIfExpired = () => {
    return new Promise((resolve, reject) => {
        if (!getAccessToken()) {
            post('/auth/token', { token: getRefreshToken() })
                .then(response => {
                    saveTokens(response);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                })
        }
        else {
            resolve();
        }
    })
}