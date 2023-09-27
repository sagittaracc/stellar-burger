import { STELLAR_BURGER_API } from '../constants/api';
import { THttpMethod } from '../types/request';
import { TResponse } from '../types/response';
import { getAccessToken, refreshTokenIfExpired } from './token';

const responseError = (message: string) => {
    return {
        success: false,
        message: message
    }
}

export const request = (url: string, method: THttpMethod, data?: object, headers?: object) => {
    return new Promise<TResponse>((resolve, reject) => {
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
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(`Error #${response.status}`);
        })
        .then(response => {
            if (response.success) {
                resolve(response);
            }
            else {
                reject(response);
            }
        })
        .catch(error => {
            reject(responseError(error));
        })
    })
}

export const get = (url: string) => {
    return request(url, "GET");
}

export const post = (url: string, data: object) => {
    return request(url, "POST", data);
}

export const secureRequest = (url: string, method: THttpMethod, data?: object) => {
    return new Promise<TResponse>((resolve, reject) => {
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

export const secureGet = (url: string) => {
    return secureRequest(url, "GET");
}

export const securePost = (url: string, data: object) => {
    return secureRequest(url, "POST", data);
}

export const securePatch = (url: string, data: object) => {
    return secureRequest(url, "PATCH", data);
}