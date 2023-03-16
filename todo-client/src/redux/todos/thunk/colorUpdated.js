import { colorSelectionAction } from "../todoActions";

const colorUpdated = (todoId, color) => {
    return async (dispatch, getState) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                color: color,

            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        const todo = await response.json();

        dispatch(colorSelectionAction(todo.id, todo.color));
    };
};

export default colorUpdated;