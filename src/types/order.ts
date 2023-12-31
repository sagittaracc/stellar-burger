import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "../services/order/actions";
import { TIngredient } from "./ingredient";

export type TOrder = {
    number: number;
    _id: string,
    ingredients: Array<string>,
    status: TStatus,
    name: string,
    createdAt: string,
    updatedAt: string,
};

export type TOrderDetails = {
    order: TOrder;
};

export type TOrderNumberComponent = TOrder;

export type TOrderComponent = {
    order: TOrder;
    link?: string;
    cost?: number;
    ingredients?: Array<TIngredient>;
};

export type TOrderStatusComponent = {
    status: TStatus;
};

export type TInitialOrder = {
    orderRequest: boolean;
    orderError: boolean;
    order: TOrder | null;
};

export interface IOrderRequest {
    readonly type: typeof CREATE_ORDER_REQUEST;
}

export interface IOrderSuccess {
    readonly type: typeof CREATE_ORDER_SUCCESS;
    payload: TOrder;
}

export interface IOrderFail {
    readonly type: typeof CREATE_ORDER_FAIL;
}

export type TOrderAction =
    IOrderRequest |
    IOrderSuccess |
    IOrderFail;

export type TStatus = "created" | "pending" | "done";