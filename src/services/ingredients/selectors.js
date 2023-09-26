import { createSelector } from "reselect";
import { getBun, getIngredients } from "../constructor/selectors";

export const getData = (store) => store.ingredients.data;
export const isLoading = (store) => store.ingredients.loading;
export const hasError = (store) => store.ingredients.error;

export const ingredientsSelector = createSelector(getData, isLoading, hasError, (data, loading, error) => {
    return [
        !loading && !error && data !== null,
        data
    ];
});

export const getIngredientCounts = createSelector(getBun, getIngredients, (bun, ingredients) => {
    let counts = null;

    if (bun) {
        counts = {};
        counts[bun._id] = 2;
    }

    ingredients.forEach((ingredient) => {
        if (!counts) {
            counts = {};
        }

        if (counts[ingredient._id] === undefined) {
            counts[ingredient._id] = 0;
        }

        counts[ingredient._id]++;
    })

    return counts;
});