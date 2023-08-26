import { createSelector } from "reselect";

export const getIngredientInfo = (store) => store.preview.ingredientInfo;
export const getPreview = (store) => store.preview.preview;

export const ingredientPreview = createSelector(getIngredientInfo, getPreview, (info, preview) => {
    return [
        preview,
        info
    ];
});