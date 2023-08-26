export const OPEN_PREVIEW = 'INGREDIENT/OPEN_PREVIEW';
export const CLOSE_PREVIEW = 'INGREDIENT/CLOSE_PREVIEW';

export const openPreview = (ingredient) => {
    return {
        type: OPEN_PREVIEW,
        payload: ingredient
    };
};

export const closePreview = () => {
    return {
        type: CLOSE_PREVIEW
    }
}