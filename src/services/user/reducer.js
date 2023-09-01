import {
    SET_USER,
    UNSET_USER
} from './actions';

const initialState = {
    email: '',
    name: '',
    auth: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                auth: true
            }
        case UNSET_USER:
            return {
                ...state,
                email: '',
                name: '',
                auth: false
            }
        default:
            return state;
    }
}