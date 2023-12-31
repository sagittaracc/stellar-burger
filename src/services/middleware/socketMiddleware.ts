import type { Middleware, MiddlewareAPI } from 'redux';
import { RootState, TAppActions, TDispatch } from '../../types';
import { TWSActions } from '../../types/ws';
import { getAccessTokenWithoutBearer } from '../../utils/token';
import { TWsResponse } from '../../types/response';

export const socketMiddleware = (url: string, wsActions: TWSActions, guest = true): Middleware => {
    return ((store: MiddlewareAPI<TDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: TAppActions) => {
            const { dispatch, getState } = store;
            const { type } = action;
            const { wsInit, wsClose, onOpen, onClose, onError, onMessage } = wsActions;

            if (type === wsInit) {
                if (guest) {
                    socket = new WebSocket(url);
                }
                else {
                    socket = new WebSocket(`${url}?token=${getAccessTokenWithoutBearer()}`);
                }
            }

            if (socket) {
                socket.onopen = () => {
                    dispatch({ type: onOpen });
                };

                socket.onerror = event => {
                    dispatch({ type: onError, payload: event });
                };

                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData: TWsResponse = JSON.parse(data);
                    dispatch({ type: onMessage, payload: parsedData });
                };

                socket.onclose = () => {
                    dispatch({ type: onClose });
                };

                if (type === wsClose && socket) {
                    socket.close();
                }
            }

            next(action);
        };
    }) as Middleware;
};