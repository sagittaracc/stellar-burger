import { TFeedSocketActions } from "../../types/feed";

export const CONNECTION_START: 'CONNECTION_START1' = 'CONNECTION_START1';
export const CONNECTION_SUCCESS: 'CONNECTION_SUCCESS' = 'CONNECTION_SUCCESS';
export const CONNECTION_ERROR: 'CONNECTION_ERROR' = 'CONNECTION_ERROR';
export const CONNECTION_CLOSED: 'CONNECTION_CLOSED' = 'CONNECTION_CLOSED';
export const GET_FEED: 'GET_FEED' = 'GET_FEED';

export const feedActions: TFeedSocketActions = {
    wsInit: CONNECTION_START,
    onOpen: CONNECTION_SUCCESS,
    onClose: CONNECTION_CLOSED,
    onError: CONNECTION_ERROR,
    onMessage: GET_FEED,
};