import { addIngredient, delIngredient } from "../services/constructor/actions";
import { constructorReducer, initialState } from "../services/constructor/reducer";
import { TIngredientId } from "../types/ingredient";
import { bun } from "./stubs/ingredient";

describe('test constructor', () => {
    it('should add an ingredient', () => {
        const bunAction = addIngredient(bun);
        expect(constructorReducer(initialState, bunAction)).toEqual({
            bun: bunAction.payload,
            ingredients: [],
        });
    });

    it('should del an ingredient', () => {
        const bunAction = addIngredient(bun);
        constructorReducer(initialState, bunAction);
        expect(constructorReducer(initialState, delIngredient(bunAction.payload.id as unknown as TIngredientId))).toEqual({
            bun: null,
            ingredients: []
        });
    });
});