import { Action, ActionCreator, AnyAction } from "redux";
import rootReducer from "../services/rootReducer";
import store from "../services/store";
import { ThunkAction } from "redux-thunk";

export type TDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<T = void> = ActionCreator<
    ThunkAction<T, Action, RootState, AnyAction>
>;

export type THashMap<T> = Record<string, T> | null;