import { toggledAction } from "../todoActions";

const statusUpdated = (todoId, currentStatus) => {
    return async (dispatch, getState) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: !currentStatus,

            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        const todo = await response.json();

        dispatch(toggledAction(todo.id));
    };
};

export default statusUpdated;