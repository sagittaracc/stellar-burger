import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAIL,
    SHOW_INGREDIENT,
    CLOSE_INGREDIENT
} from './actions';

const initialState = {
    data: null,
    loading: false,
    error: false,

    ingredientInfo: null,
    preview: false
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
        case SHOW_INGREDIENT:
            return {
                ...state,
                ingredientInfo: action.payload,
                preview: true
            };
        case CLOSE_INGREDIENT:
            return {
                ...state,
                ingredientPreview: null,
                preview: false
            };
        default:
            return state;
    }
};