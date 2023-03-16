import { combineReducers } from "redux";
import filterReducer from './filter/filterReducer';
import todoReducer from './todos/todoReducer';

// Create RootReducer function use combine reducer function
const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer,
});


export default rootReducer;