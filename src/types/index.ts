import { Action, ActionCreator } from "redux";
import rootReducer from "../services/rootReducer";
import store from "../services/store";
import { ThunkAction } from "redux-thunk";
import {  } from "./feed";
import { TAuthAction } from "./auth";
import { TConstructorAction } from "./constructor";
import { TIngredientAction } from "./ingredient";
import { TFormAction } from "./form";
import { TOrderAction } from "./order";

export type TDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export type TAppActions =
    TAuthAction |
    TConstructorAction |
    TFormAction |
    TIngredientAction |
    TOrderAction;

export type AppThunk<T = void> = ActionCreator<
    ThunkAction<T, Action, RootState, TAppActions>
>;

export type THashMap<T> = Record<string, T> | null;



