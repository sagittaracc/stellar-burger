import {
    OPEN_PREVIEW,
    CLOSE_PREVIEW
} from './actions';

const initialState = {
    preview: false
};

export const previewReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_PREVIEW:
            return {
                ...state,
                preview: true
            };
        case CLOSE_PREVIEW:
            return {
                ...state,
                preview: false
            };
        default:
            return state;
    }
};