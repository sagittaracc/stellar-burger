export const previewBegin = () => {
    localStorage.setItem("preview", true);
}

export const previewFinish = () => {
    localStorage.removeItem("preview")
}

export const isPreview = () => {
    return localStorage.getItem("preview");
}