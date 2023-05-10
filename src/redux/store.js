import { applyMiddleware, createStore } from "redux";
import { MovieReducer } from "./MovieReducer";
import thunk from "redux-thunk";

let store = createStore(MovieReducer,applyMiddleware(thunk));
export default store

