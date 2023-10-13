import { addIngredient, constructorReset, delIngredient, moveIngredient } from "../services/constructor/actions";
import { constructorReducer, initialState } from "../services/constructor/reducer";
import { bun, main, sauce } from "./stubs/ingredient";

describe('test constructor', () => {
    it('should add an ingredient', () => {
        const action = addIngredient(bun);
        const actual = constructorReducer(initialState, action);
        const expected = {
            bun: action.payload,
            ingredients: []
        }

        expect(actual).toEqual(expected);
    });

    it('should del an ingredient', () => {
        let currentState = initialState;

        const stepOne = addIngredient(bun);
        currentState = constructorReducer(currentState, stepOne);

        const stepTwo = addIngredient(main);
        currentState = constructorReducer(currentState, stepTwo);

        const action = delIngredient(stepTwo.payload.id);
        const actual = constructorReducer(currentState, action);
        const expected = {
            bun: stepOne.payload,
            ingredients: []
        }

        expect(actual).toEqual(expected);
    });

    it('should switch two ingredients', () => {
        let currentState = initialState;

        const stepOne = addIngredient(bun);
        currentState = constructorReducer(currentState, stepOne);
        
        const stepTwo = addIngredient(main);
        currentState = constructorReducer(currentState, stepTwo);

        const stepThree = addIngredient(sauce);
        currentState = constructorReducer(currentState, stepThree);

        const action = moveIngredient(stepTwo.payload.id, stepThree.payload.id);
        const actual = constructorReducer(currentState, action);
        const expected = {
            bun: stepOne.payload,
            ingredients: [stepThree.payload, stepTwo.payload]
        }

        expect(actual).toEqual(expected);
    });

    it('should reset the constructor settings', () => {
        let currentState = initialState;

        const stepOne = addIngredient(bun);
        currentState = constructorReducer(currentState, stepOne);
        
        const stepTwo = addIngredient(main);
        currentState = constructorReducer(currentState, stepTwo);

        const stepThree = addIngredient(sauce);
        currentState = constructorReducer(currentState, stepThree);

        const action = constructorReset();
        const actual = constructorReducer(currentState, action);
        const expected = {
            bun: null,
            ingredients: []
        };

        expect(actual).toEqual(expected);
    });
});