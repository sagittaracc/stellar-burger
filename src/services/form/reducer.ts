import { TFormAction, TInitialForm } from '../../types/form';
import {
    FORM_REQUEST,
    FORM_SUCCESS,
    FORM_FAIL
} from './actions';

const initialState: TInitialForm = {
    isRequest: false,
    error: '',
}

export const formReducer = (state = initialState, action: TFormAction) => {
    switch (action.type) {
        case FORM_REQUEST:
            return {
                ...state,
                isRequest: true,
                error: ''
            };
        case FORM_SUCCESS:
            return {
                ...state,
                isRequest: false,
                error: ''
            };
        case FORM_FAIL:
            return {
                ...state,
                isRequest: false,
                error: action.payload
            }
        default:
            return state;
    }
}