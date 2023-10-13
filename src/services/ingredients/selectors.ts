import { createSelector } from "reselect";
import { getBun, getIngredients } from "../constructor/selectors";
import { RootState, THashMap } from "../../types";

export const getIngredientGroupData = (store: RootState) => store.ingredients.data;
export const isLoading = (store: RootState) => store.ingredients.loading;
export const hasError = (store: RootState) => store.ingredients.error;

export const isIngredientsloadedSelector = createSelector(getIngredientGroupData, isLoading, hasError, (data, loading, error) => {
    return !loading && !error && data !== null;
});

export const getIngredientListSelector = createSelector(getIngredientGroupData, (data) => {
    return data ? data.bun.concat(data.main).concat(data.sauce) : [];
});

export const getIngredientCounts = createSelector(getBun, getIngredients, (bun, ingredients) => {
    let counts: THashMap<number> = null;

    if (bun) {
        counts = {};
        const bunId = bun._id as unknown as string;
        counts[bunId] = 2;
    }

    ingredients.forEach((ingredient) => {
        if (!counts) {
            counts = {};
        }

        const ingredientId = ingredient._id as unknown as string;

        if (counts[ingredientId] === undefined) {
            counts[ingredientId] = 0;
        }

        counts[ingredientId]++;
    })

    return counts;
});