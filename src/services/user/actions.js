export const SET_USER = 'USER/SET';
export const UNSET_USER = 'USER/UNSET';

export const setUser = ({email, name}) => {
    return {
        type: SET_USER,
        payload: {
            email,
            name
        }
    }
}

export const unsetUser = () => {
    return {
        type: UNSET_USER
    }
}