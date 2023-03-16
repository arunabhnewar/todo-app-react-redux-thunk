import { loadedAction } from "../todoActions";

const fetchTodos = async (dispatch, getState) => {
    const response = await fetch('http://localhost:9000/todos');
    const todos = await response.json();

    dispatch(loadedAction(todos));
};


export default fetchTodos;

