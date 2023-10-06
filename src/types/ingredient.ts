import { GET_INGREDIENTS_FAIL, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from "../services/ingredients/actions";

export type TIngredientId = () => string;

export type TIngredient = {
    readonly calories      : number;
    readonly carbohydrates : number;
    readonly fat           : number;
    readonly image         : string;
    readonly image_large   : string;
    readonly image_mobile  : string;
    readonly name          : string;
    readonly price         : number;
    readonly proteins      : number;
    readonly type          : string;
    readonly _id           : TIngredientId;
    readonly id            : TIngredientId;
};

export type TIngredientCategory = "bun" | "main" | "sauce";

export type TIngredientGroup = Record<TIngredientCategory, Array<TIngredient>>;

export type TInitialIngredient = {
    data: TIngredientGroup | null;
    loading: boolean;
    error: boolean;
};

export interface IIngredientRequest {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IIngredientSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    payload: TIngredientGroup;
}

export interface IIngredientFail {
    readonly type: typeof GET_INGREDIENTS_FAIL;
}

export type TIngredientAction =
    IIngredientRequest |
    IIngredientSuccess |
    IIngredientFail;

export type TBunComponent = {
    position: "top" | "bottom";
    data: TIngredient;
};

export type TCartComponent = {
    ingredient: TIngredient;
};

export type TIngredientComponent = {
    data: Array<TIngredient>;
    bun: TIngredient;
};

export type TBurgerIngredientComponent = {
    data: TIngredientGroup;
};

export type TIngredientBoxComponent = TBurgerIngredientComponent & {
    tab: any;
    title: string;
    category: TIngredientCategory;
};

export type TIngredientListComponent = {
    list: Array<TIngredient>;
    maxCount?: number | null;
};