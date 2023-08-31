import {
    SET_USER,
    UNSET_USER
} from './actions';

const initialState = {
    email: '',
    name: ''
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name
            }
        case UNSET_USER:
            return {
                ...state,
                email: '',
                name: ''
            }
        default:
            return state;
    }
}