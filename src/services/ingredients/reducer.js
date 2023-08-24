import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAIL
} from './actions';

const initialState = {
    data: null,
    loading: false,
    error: false
};

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            };
        case GET_INGREDIENTS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};