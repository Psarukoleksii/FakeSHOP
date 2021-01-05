import {createStore} from "redux";
import {reducer} from "./reducers/red";

export const store = createStore(reducer);
