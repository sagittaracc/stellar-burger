import { Action, ActionCreator } from "redux";
import rootReducer from "../services/rootReducer";
import store from "../services/store";
import { ThunkAction } from "redux-thunk";
import { TFeedActions } from "./feed";
import { TAuthAction } from "./auth";
import { TConstructorAction } from "./constructor";
import { TIngredientAction } from "./ingredient";
import { TFormAction } from "./form";
import { TOrderAction } from "./order";
import { useDispatch as dispatchHook } from "react-redux";
import { TProfileOrdersActions } from "./profile-orders";

export type TDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export type TAppActions =
    TAuthAction |
    TConstructorAction |
    TFormAction |
    TIngredientAction |
    TOrderAction |
    TFeedActions |
    TProfileOrdersActions;

export type AppThunk<T = void> = ActionCreator<
    ThunkAction<T, Action, RootState, TAppActions>
>;

type AppDispatchFunc = () => TDispatch | AppThunk;
export const useDispatch: AppDispatchFunc = dispatchHook;

export type THashMap<T> = Record<string, T> | null;



