export const previewBegin = (ingredient) => {
    localStorage.setItem("preview", true);
    localStorage.setItem("ingredient", JSON.stringify(ingredient));
}

export const previewFinish = () => {
    localStorage.removeItem("preview");
    localStorage.removeItem("ingredient");
}

export const isPreview = () => {
    return localStorage.getItem("preview");
}

export const getPreviewIngredient = () => {
    return JSON.parse(localStorage.getItem("ingredient"));
}