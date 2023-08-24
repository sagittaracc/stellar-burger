import { createSelector } from "reselect";

export const getData = (store) => store.ingredients.data;
export const isLoading = (store) => store.ingredients.loading;
export const hasError = (store) => store.ingredients.error;

export const getPreview = (store) => store.ingredients.preview;

export const ingredientsData = createSelector(getData, isLoading, hasError, (data, loading, error) => {
    return [
        !loading && !error && data !== null,
        data
    ];
});

export const preview = createSelector(getPreview, (preview) => {
    return [
        preview !== null,
        preview
    ];
});