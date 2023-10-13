import { FORM_FAIL, FORM_REQUEST, FORM_SUCCESS } from "../../services/form/actions";
import { formReducer, initialState } from "../../services/form/reducer";

describe('form constructor', () => {
    it('should send form request', () => {
        const actual = formReducer(initialState, { type: FORM_REQUEST });
        const expected = {
            isRequest: true,
            error: ''
        }

        expect(actual).toEqual(expected);
    });

    it('should response with success', () => {
        const actual = formReducer(initialState, { type: FORM_SUCCESS });
        const expected = {
            isRequest: false,
            error: ''
        }

        expect(actual).toEqual(expected);
    });

    it('should response with error', () => {
        const actual = formReducer(initialState, { type: FORM_FAIL, payload: 'Something went wrong!' });
        const expected = {
            isRequest: false,
            error: 'Something went wrong!'
        };

        expect(actual).toEqual(expected);
    });
});