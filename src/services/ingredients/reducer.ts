import { TIngredientAction, TInitialIngredient } from '../../types/ingredient';
import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAIL,
} from './actions';

export const initialState: TInitialIngredient = {
    data: null,
    loading: false,
    error: false,
};

export const ingredientsReducer = (state = initialState, action: TIngredientAction) => {
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
                data: null,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};