import { TIngredient } from "./ingredient";
import { TOrderDetails } from "./order";
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

export type TSuccessResponse =
    TIngredientResponse |
    TUserResponse |
    TTokenResponse |
    TOrderResponse;

export type TErrorResponse = TError & {
    message: string;
}

export type TResponse = TSuccessResponse | TErrorResponse;