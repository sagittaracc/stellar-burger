import { TIngredient } from "./ingredient";
import { TOrderDetails } from "./order";
import { TUserInfo } from "./user";

export interface TSuccess {
    success: true;
}

export interface TError {
    success: false;
}

export interface TIngredientResponse extends TSuccess {
    data: Array<TIngredient>;
}

export interface TUserResponse extends TSuccess {
    user: TUserInfo;
}

export interface TTokenResponse extends TUserResponse {
    accessToken: string;
    refreshToken: string;
}

export type TOrderResponse = TOrderDetails;

export type TSuccessResponse = TIngredientResponse | TUserResponse | TTokenResponse | TOrderResponse;

export interface TErrorResponse extends TError {
    message: string;
}

export type TResponse = TSuccessResponse | TErrorResponse;