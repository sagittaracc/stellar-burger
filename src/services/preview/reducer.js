import {
    OPEN_PREVIEW,
    CLOSE_PREVIEW
} from './actions';

const initialState = {
    ingredientInfo: null,
    preview: false
};

export const previewReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_PREVIEW:
            return {
                ...state,
                ingredientInfo: action.payload,
                preview: true
            };
        case CLOSE_PREVIEW:
            return {
                ...state,
                ingredientPreview: null,
                preview: false
            };
        default:
            return state;
    }
};