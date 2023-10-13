import { CONNECTION_CLOSE, CONNECTION_CLOSED, CONNECTION_ERROR, CONNECTION_SUCCESS, GET_FEED } from "../../services/feed/actions";
import { feedReducer, initialState } from "../../services/feed/reducer";
import { feed } from "../stubs/feed";

describe('test feed', () => {
    it('should close socket', () => {
        const actual = feedReducer(initialState, { type: CONNECTION_CLOSE });
        const expected = {
            connected: false,
            feed: null,
            error: undefined
        }

        expect(actual).toEqual(expected);
    });

    it('should open socket', () => {
        const actual = feedReducer(initialState, { type: CONNECTION_SUCCESS });
        const expected = {
            connected: true,
            feed: null,
            error: undefined
        }

        expect(actual).toEqual(expected);
    });

    it('should not open socket', () => {
        const actual = feedReducer(initialState, { type: CONNECTION_ERROR, payload: new Event("Aborted") });
        const expected = {
            connected: false,
            feed: null,
            error: new Event("Aborted")
        };

        expect(actual).toEqual(expected);
    });

    it('should get notified when its closed', () => {
        const actual = feedReducer(initialState, { type: CONNECTION_CLOSED });
        const expected = {
            connected: false,
            feed: null,
            error: undefined
        };

        expect(actual).toEqual(expected);
    });

    it('should get feed list', () => {
        const actual = feedReducer(initialState, { type: GET_FEED, payload: feed });
        const expected = {
            connected: false,
            feed: feed,
            error: undefined
        };

        expect(actual).toEqual(expected);
    });
});