export type TSocketStoreActions<T, U, Z, X, Y> = {
    wsInit: T;
    onOpen: U;
    onClose: Z;
    onError: X;
    onMessage: Y;
}

interface IConnectionStartAction<T> {
    readonly type: T;
}

interface IConnectionSuccessAction<T> {
    readonly type: T;
}

interface IConnectionErrorAction<T> {
    readonly type: T;
    payload: Event;
}

interface IConnectionClosedAction<T> {
    readonly type: T;
}

interface IGetDataAction<T, U> {
    readonly type: T;
    payload: U;
}

export type TSocketActions<T, U, Z, X, Y, M> =
    IConnectionStartAction<T> |
    IConnectionSuccessAction<U> |
    IConnectionClosedAction<Z> |
    IConnectionErrorAction<X> |
    IGetDataAction<Y, M>;