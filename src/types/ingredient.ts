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
};

export type TIngredientInfo = TIngredient & {
    id: TIngredientId;
};