import { combineReducers } from "redux";
import { ingredientsReducer } from './ingredients/reducer';
import { constructorReducer } from "./constructor/reducer";
import { orderReducer } from "./order/reducer";
import { previewReducer } from "./preview/reducer";
import { userReducer } from "./user/reducer";
import { registerReducer } from "./register/reducer";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    preview: previewReducer,
    construct: constructorReducer,
    order: orderReducer,
    user: userReducer,
    register: registerReducer
});

export default rootReducer;