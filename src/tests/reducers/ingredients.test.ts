import { GET_INGREDIENTS_FAIL, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from "../../services/ingredients/actions";
import { ingredientsReducer, initialState } from "../../services/ingredients/reducer";
import { bun, main, sauce } from "../stubs/ingredient";

describe('test ingredients data', () => {
    it('should request ingredients', () => {
        const actual = ingredientsReducer(initialState, { type: GET_INGREDIENTS_REQUEST });
        const expected = {
            data: null,
            loading: true,
            error: false
        }

        expect(actual).toEqual(expected);
    });

    it('should response with ingredient list', () => {
        const actual = ingredientsReducer(initialState, { type: GET_INGREDIENTS_SUCCESS, payload: {
            bun: [bun],
            main: [main],
            sauce: [sauce]
        } });
        const expected = {
            data: {
                bun: [bun],
                main: [main],
                sauce: [sauce]
            },
            loading: false,
            error: false
        }

        expect(actual).toEqual(expected);
    });

    it('should response with error', () => {
        const actual = ingredientsReducer(initialState, { type: GET_INGREDIENTS_FAIL });
        const expected = {
            data: null,
            loading: false,
            error: true
        };

        expect(actual).toEqual(expected);
    });
});