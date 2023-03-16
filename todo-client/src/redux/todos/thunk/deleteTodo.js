import { deletedAction } from "../todoActions";

const deleteTodo = (todoId) => {
    return async (dispatch, getState) => {
        await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'DELETE',
        });


        dispatch(deletedAction(todoId));
    };
};

export default deleteTodo;