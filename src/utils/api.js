import { STELLAR_BURGER_API } from '../constants/api';
import { getAccessToken, refreshTokenIfExpired } from './token';

const responseError = (message) => {
    return {
        success: false,
        message: message
    }
}

export const request = (url, method, data, headers) => {
    return new Promise((resolve, reject) => {
        fetch(
            STELLAR_BURGER_API + url,
            {
                method,
                headers: {
                    ...headers,
                    "Content-Type": "application/json"
                },
                body: data ? JSON.stringify(data) : null
            }
        )
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                resolve(response);
            }
            else {
                reject(response);
            }
        })
        .catch(() => {
            reject(responseError("Internal Server Error"));
        })
    })
}

export const get = (url) => {
    return request(url, "GET");
}

export const post = (url, data) => {
    return request(url, "POST", data);
}

export const secureRequest = (url, method, data) => {
    return new Promise((resolve, reject) => {
        refreshTokenIfExpired()
            .then(() => request(url, method, data,
                {
                    authorization: getAccessToken()
                }
            ))
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
    })
}

export const secureGet = (url) => {
    return secureRequest(url, "GET");
}

export const securePatch = (url, data) => {
    return secureRequest(url, "PATCH", data);
}