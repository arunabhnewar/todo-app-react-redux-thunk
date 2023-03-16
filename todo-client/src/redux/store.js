import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

// Create New Store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));