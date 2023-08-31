import Cookies from 'js-cookie';

const ACCESS_TOKEN_LIFETIME = 20; // в минутах

export const saveTokens = ({accessToken, refreshToken}) => {
    Cookies.set('accessToken', accessToken, {expires: ACCESS_TOKEN_LIFETIME / 1440});
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
}