export type TIngredientList = Array<string>;

export type TCardOrderComponent = {
    data: {
        number: string,
        timestamp: string,
        name: string,
        price: number,
        ingredients: TIngredientList,
    }
};

export type TIngredientsComponent = {
    list: TIngredientList;
    maxCount: number;
};