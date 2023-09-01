import { combineReducers } from "redux";
import { ingredientsReducer } from './ingredients/reducer';
import { constructorReducer } from "./constructor/reducer";
import { orderReducer } from "./order/reducer";
import { previewReducer } from "./preview/reducer";
import { formReducer } from "./form/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    preview: previewReducer,
    construct: constructorReducer,
    order: orderReducer,
    form: formReducer,
    auth: authReducer
});

export default rootReducer;