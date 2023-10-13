import { CONNECTION_CLOSE, CONNECTION_CLOSED, CONNECTION_ERROR, CONNECTION_SUCCESS, GET_PROFILE_ORDERS } from "../../services/profile-orders/actions";
import { initialState, profileOrdersReducer } from "../../services/profile-orders/reducer";
import { profileOrders } from "../stubs/profile-orders";

describe('test profile orders', () => {
    it('should close socket', () => {
        const actual = profileOrdersReducer(initialState, { type: CONNECTION_CLOSE });
        const expected = {
            connected: false,
            orders: null,
            error: undefined
        }

        expect(actual).toEqual(expected);
    });

    it('should open socket', () => {
        const actual = profileOrdersReducer(initialState, { type: CONNECTION_SUCCESS });
        const expected = {
            connected: true,
            orders: null,
            error: undefined
        }

        expect(actual).toEqual(expected);
    });

    it('should not open socket', () => {
        const actual = profileOrdersReducer(initialState, { type: CONNECTION_ERROR, payload: new Event("Aborted") });
        const expected = {
            connected: false,
            orders: null,
            error: new Event("Aborted")
        };

        expect(actual).toEqual(expected);
    });

    it('should get notified when its closed', () => {
        const actual = profileOrdersReducer(initialState, { type: CONNECTION_CLOSED });
        const expected = {
            connected: false,
            orders: null,
            error: undefined
        };

        expect(actual).toEqual(expected);
    });

    it('should get order profile list', () => {
        const actual = profileOrdersReducer(initialState, { type: GET_PROFILE_ORDERS, payload: profileOrders });
        const expected = {
            connected: false,
            orders: profileOrders,
            error: undefined
        };

        expect(actual).toEqual(expected);
    });
});