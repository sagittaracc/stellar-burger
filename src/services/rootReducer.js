import { combineReducers } from "redux";
import { ingredientsReducer } from './ingredients/reducer';
import { constructorReducer } from "./constructor/reducer";
import { orderReducer } from "./order/reducer";
import { formReducer } from "./form/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    construct: constructorReducer,
    order: orderReducer,
    form: formReducer,
    auth: authReducer
});

export default rootReducer;