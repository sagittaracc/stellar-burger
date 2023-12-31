import { TFeed } from "./feed";
import { TIngredient } from "./ingredient";
import { TOrder, TOrderDetails } from "./order";
import { TTokenPair } from "./token";
import { TUserInfo } from "./user";

export type TSuccess = {
    success: true;
};

export type TError = {
    success: false;
};

export type TIngredientResponse = TSuccess & {
    data: Array<TIngredient>;
};

export type TUserResponse = TSuccess & {
    user: TUserInfo;
};

export type TTokenResponse = TUserResponse & TTokenPair;

export type TOrderResponse = TOrderDetails;

export type TFeedResponse = TSuccess & TFeed;

export type TAllOrdersResponse = TSuccess & {
    orders: Array<TOrder>;
}

export type TWsOrdersResponse = TSuccess & {
    orders: Array<TOrder>;
    total: number;
    totalToday: number;
}

export type TSuccessResponse =
    TIngredientResponse |
    TUserResponse |
    TTokenResponse |
    TOrderResponse |
    TFeedResponse |
    TAllOrdersResponse;

export type TErrorResponse = TError & {
    message: string;
}

export type TWsSuccessResponse = TWsOrdersResponse;

export type TWsErrorResponse = TError & {
    message: string;
}

export type TResponse = TSuccessResponse | TErrorResponse;

export type TWsResponse = TWsSuccessResponse;