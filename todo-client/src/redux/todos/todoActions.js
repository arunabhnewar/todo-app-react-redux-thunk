import { LOADED, TODO_ADDED, TODO_ALL_COMPLETED, TODO_CLEAR_COMPLETED, TODO_COLOR_SELECTION, TODO_DELETED, TODO_TOGGLED } from "./todosActionType";


// Todo Loaded Action Create
export const loadedAction = (todos) => {
    return {
        type: LOADED,
        payload: todos,
    }
}


// Todo Added Action Create
export const addedAction = (todoText) => {
    return {
        type: TODO_ADDED,
        payload: todoText
    }
};


// Todo Toggled Action Create
export const toggledAction = (todoId) => {
    return {
        type: TODO_TOGGLED,
        payload: todoId
    }
};


// Todo Color Selection Action Create
export const colorSelectionAction = (todoId, color) => {
    return {
        type: TODO_COLOR_SELECTION,
        payload: {
            todoId,
            color,
        },
    }
};


// Todo Deleted Action Create
export const deletedAction = (todoId) => {
    return {
        type: TODO_DELETED,
        payload: todoId,
    }
};


// Todo All Completed Action Create
export const allCompletedAction = () => {
    return {
        type: TODO_ALL_COMPLETED,
    }
};


// Todo Clear Completed Action Create
export const clearCompletedAction = () => {
    return {
        type: TODO_CLEAR_COMPLETED,
    }
};
