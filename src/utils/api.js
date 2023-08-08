import { STELLAR_BURGER_API } from '../constants/api';

export const api = (url) => {
    return new Promise((resolve, rejects) => {
        fetch(`${STELLAR_BURGER_API}${url}`)
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