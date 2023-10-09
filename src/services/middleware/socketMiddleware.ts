import type { Middleware, MiddlewareAPI } from 'redux';
import { RootState, TDispatch } from '../../types';
import { TWSStoreActions } from '../../types/ws';

export const socketMiddleware = (url: string, wsActions: TWSStoreActions): Middleware => {
    return ((store: MiddlewareAPI<TDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: any) => {
            const { dispatch, getState } = store;
            const { type } = action;
            const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

            if (type === wsInit) {
                socket = new WebSocket(url);
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
                    const parsedData: any = JSON.parse(data);
                    dispatch({ type: onMessage, payload: parsedData });
                };

                socket.onclose = () => {
                    dispatch({ type: onClose });
                };
            }

            next(action);
        };
    }) as Middleware;
};