import { addIngredient, constructorReset, delIngredient, moveIngredient } from "../../services/constructor/actions";
import { constructorReducer, initialState } from "../../services/constructor/reducer";
import { IAddIngredientRequest, TInitialConstructor } from "../../types/constructor";
import { bun, main, sauce } from "../stubs/ingredient";

describe('test constructor', () => {
    let currentState: TInitialConstructor;
    let actionOne: IAddIngredientRequest,
        actionTwo: IAddIngredientRequest,
        actionThree: IAddIngredientRequest;

    beforeEach(() => {
        currentState = initialState;
        actionOne = addIngredient(bun);
        currentState = constructorReducer(currentState, actionOne);

        actionTwo = addIngredient(main);
        currentState = constructorReducer(currentState, actionTwo);

        actionThree = addIngredient(sauce);
        currentState = constructorReducer(currentState, actionThree);
    });

    it('should add an ingredient', () => {
        const actual = currentState;
        const expected = {
            bun: actionOne.payload,
            ingredients: [actionTwo.payload, actionThree.payload]
        }

        expect(actual).toEqual(expected);
    });

    it('should del an ingredient', () => {
        const actual = constructorReducer(currentState, delIngredient(actionThree.payload.id));
        const expected = {
            bun: actionOne.payload,
            ingredients: [actionTwo.payload]
        }

        expect(actual).toEqual(expected);
    });

    it('should switch two ingredients', () => {
        const actual = constructorReducer(currentState, moveIngredient(actionTwo.payload.id, actionThree.payload.id));
        const expected = {
            bun: actionOne.payload,
            ingredients: [actionThree.payload, actionTwo.payload]
        }

        expect(actual).toEqual(expected);
    });

    it('should reset the constructor settings', () => {
        const actual = constructorReducer(currentState, constructorReset());
        const expected = {
            bun: null,
            ingredients: []
        };

        expect(actual).toEqual(expected);
    });
});