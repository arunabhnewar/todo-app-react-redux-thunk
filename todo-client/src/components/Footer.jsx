import { useDispatch, useSelector } from "react-redux";
import {
  colorChangedAction,
  statusChangedAction,
} from "../redux/filter/filterActions";

// Task remaining txt formators
const numberOfTodos = number_of_todos => {
  switch (number_of_todos) {
    case 0:
      return "No Task";

    case 1:
      return "1 Task";

    default:
      return `${number_of_todos} Tasks`;
  }
};

export default function Footer() {
  //Extract State from root reducer
  const todos = useSelector(state => state.todos);
  const filters = useSelector(state => state.filters);

  // Dispatch
  const dispatch = useDispatch();

  // Task remaining
  const todosRemain = todos.filter(todo => !todo.completed).length;
  //   console.log(todosRemain);

  // Extract data from filter
  const { status, colors } = filters;

  // Status change handler function
  const statusChangedHandler = status => {
    dispatch(statusChangedAction(status));
  };

  // Color change handler function
  const colorChangedHandler = color => {
    if (colors.includes(color)) {
      dispatch(colorChangedAction(color, "removed"));
    } else {
      dispatch(colorChangedAction(color, "added"));
    }
  };

  return (
    <div className='mt-4 flex justify-between text-xs text-gray-500'>
      <p>{numberOfTodos(todosRemain)} left</p>
      <ul className='flex space-x-1 items-center text-xs'>
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => statusChangedHandler("All")}>
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => statusChangedHandler("Incomplete")}>
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => statusChangedHandler("Complete")}>
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => colorChangedHandler("green")}></li>

        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => colorChangedHandler("yellow")}></li>

        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => colorChangedHandler("red")}></li>
      </ul>
    </div>
  );
}
