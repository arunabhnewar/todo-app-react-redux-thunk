import { initialState } from "./initialState";
import { LOADED, TODO_ADDED, TODO_ALL_COMPLETED, TODO_CLEAR_COMPLETED, TODO_COLOR_SELECTION, TODO_DELETED, TODO_TOGGLED } from "./todosActionType";

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
    return maxId + 1;
}


// Create reducer function
const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOADED:
            return action.payload;

        case TODO_ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                },
            ]

        case TODO_TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })

        case TODO_COLOR_SELECTION:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo;
                }

                return {
                    ...todo,
                    color: color,
                }
            })

        case TODO_DELETED:
            return state.filter(todo => todo.id !== action.payload)

        case TODO_ALL_COMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true,
                }
            })

        case TODO_CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed)


        default:
            return state;
    }
};

export default todoReducer;