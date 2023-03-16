import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList() {
  //Extract State from root reducer
  const todos = useSelector(state => state.todos);
  const filters = useSelector(state => state.filters);

  // Dispatch
  const dispatch = useDispatch();

  //
  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  // Status Filter function
  const statusByFilter = todo => {
    const { status } = filters;

    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;

      default:
        return true;
    }
  };

  // Color Filter function
  const colorByFilter = todo => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {todos
        ?.filter(statusByFilter)
        ?.filter(colorByFilter)
        ?.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
}
