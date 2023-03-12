import { createStore } from "redux";
import { MyReducer } from "./reducer";

export const store = createStore(MyReducer);