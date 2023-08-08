import { STELLAR_BURGER_API } from '../constants/api';

export const request = (url, method, data) => {
    return new Promise((resolve, rejects) => {
        fetch(`${STELLAR_BURGER_API}${url}`, method === "POST" ? {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        } : null)
            .then(response => {
                if (response.ok) {
                    resolve(response.json());
                }
                else {
                    throw new Error('');
                }
            })
    })
}

export const get = (url) => {
    return request(url);
}

export const post = (url, data) => {
    return request(url, "POST", data);
}