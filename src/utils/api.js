import { STELLAR_BURGER_API } from '../constants/api';

const responseError = (message) => {
    return {
        success: false,
        message: message
    }
}

export const request = (url, method, data) => {
    return new Promise((resolve, reject) => {
        fetch(
            STELLAR_BURGER_API + url,
            method === "POST"
                ? {
                    method: method,
                    headers: {"Content-Type": "application/json"},
                    body: data ? JSON.stringify(data) : null
                }
                : null
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
    return request(url);
}

export const post = (url, data) => {
    return request(url, "POST", data);
}