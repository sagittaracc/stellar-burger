import {
    ADD_INGREDIENT,
    DEL_INGREDIENT,
    CONSTRUCTOR_RESET,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL
} from './actions';

const initialState = {
    bun: null,
    ingredients: [],

    orderRequest: false,
    orderError: false,
    order: null,
};

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            if (action.payload.type === 'bun') {
                return {
                    ...state,
                    bun: action.payload
                }
            }

            if (state.bun === null) {
                return state;
            }

            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.payload
                ]
            }
        case DEL_INGREDIENT:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients.filter(ingredient => ingredient.id !== action.payload)
                ]
            }
        case CONSTRUCTOR_RESET:
            return {
                ...state,
                bun: null,
                ingredients: []
            }
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                orderRequest: true,
                orderError: false,
                order: null
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                orderRequest: false,
                orderError: false,
                order: action.payload
            }
        case CREATE_ORDER_FAIL:
            return {
                ...state,
                orderRequest: false,
                orderError: true,
                order: null
            }
        default:
            return state;
    }
};