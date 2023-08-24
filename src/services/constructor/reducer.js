import {
    ADD_INGREDIENT,
    DEL_INGREDIENT,
    CONSTRUCTOR_RESET
} from './actions';

const initialState = {
    bun: null,
    ingredients: []
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
        default:
            return state;
    }
};