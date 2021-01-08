import {combineReducers} from "redux";
import products from "./products";
import {wishList} from "./wishList";

export const reducer = combineReducers({
    products,
    wishList,
})
