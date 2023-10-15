import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "../../services/order/actions";
import { initialState, orderReducer } from "../../services/order/reducer";
import { order } from "../stubs/order";

describe('test order', () => {
    it('should send request for order data', () => {
        const actual = orderReducer(initialState, { type: CREATE_ORDER_REQUEST });
        const expected = {
            orderRequest: true,
            orderError: false,
            order: null,
        }

        expect(actual).toEqual(expected);
    });

    it('should response with order data', () => {
        const actual = orderReducer(initialState, { type: CREATE_ORDER_SUCCESS, payload: order });
        const expected = {
            orderRequest: false,
            orderError: false,
            order: order
        }

        expect(actual).toEqual(expected);
    });

    it('should response with error', () => {
        const actual = orderReducer(initialState, { type: CREATE_ORDER_FAIL });
        const expected = {
            orderRequest: false,
            orderError: true,
            order: null
        };

        expect(actual).toEqual(expected);
    });
});