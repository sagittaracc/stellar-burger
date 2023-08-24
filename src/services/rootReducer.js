import { combineReducers } from "redux";
import { ingredientsReducer } from './ingredients/reducer';
import { constructorReducer } from "./constructor/reducer";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    construct: constructorReducer
});

export default rootReducer;