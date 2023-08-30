import {
    SET_USER,
    UNSET_USER
} from './actions';

const initialState = {
    email: null,
    name: null
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
                email: null,
                name: null
            }
        default:
            return state;
    }
}