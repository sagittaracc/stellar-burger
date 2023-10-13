import { TConstructorAction, TInitialConstructor } from '../../types/constructor';
import {
    ADD_INGREDIENT,
    DEL_INGREDIENT,
    CONSTRUCTOR_RESET,
    MOVE_INGREDIENT
} from './actions';

export const initialState: TInitialConstructor = {
    bun: null,
    ingredients: [],
};

export const constructorReducer = (state = initialState, action: TConstructorAction) => {
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
        case MOVE_INGREDIENT:
            const ingredients = [...state.ingredients];
            const oneIndex = ingredients.findIndex(ingredient => ingredient.id === action.payload.one);
            const twoIndex = ingredients.findIndex(ingredient => ingredient.id === action.payload.two);

            const buf = ingredients[oneIndex];
            ingredients[oneIndex] = ingredients[twoIndex];
            ingredients[twoIndex] = buf;

            return {
                ...state,
                ingredients
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