import { combineReducers } from "redux";
import { ingredientsReducer } from './ingredients/reducer';
import { constructorReducer } from "./constructor/reducer";
import { orderReducer } from "./order/reducer";
import { previewReducer } from "./preview/reducer";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    preview: previewReducer,
    construct: constructorReducer,
    order: orderReducer
});

export default rootReducer;