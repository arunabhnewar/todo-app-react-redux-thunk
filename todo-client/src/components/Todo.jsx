import { useDispatch } from "react-redux";
import cancelImage from "../assets/cancel.png";
import colorUpdated from "../redux/todos/thunk/colorUpdated";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import statusUpdated from "../redux/todos/thunk/statusUpdated";

export default function Todo({ todo }) {
  // Dispatch
  const dispatch = useDispatch();

  // Extract data from props
  const { id, text, completed, color } = todo;

  // Onchange handler function
  const statusChangeHandler = todoId => {
    // dispatch(toggledAction(todoId));
    dispatch(statusUpdated(todoId, completed));
  };

  // Color change handler function
  const colorChangeHandler = (todoId, color) => {
    // dispatch(colorSelectionAction(todoId, color));
    dispatch(colorUpdated(todoId, color));
  };

  // Todo task delete handler
  const taskDeleteHandler = todoId => {
    // dispatch(deletedAction(todoId));
    dispatch(deleteTodo(todoId));
  };

  return (
    <div className='flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0'>
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}>
        <input
          type='checkbox'
          className='opacity-0 absolute rounded-full'
          checked={completed}
          onChange={() => statusChangeHandler(id)}
        />
        {completed && (
          <svg
            className='fill-current w-3 h-3 text-green-500 pointer-events-none'
            viewBox='0 0 20 20'>
            <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${completed && "line-through"}`}>
        {text}
      </div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500
         ${color === "green" && "bg-green-500"}`}
        onClick={() => colorChangeHandler(id, "green")}></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500
         ${color === "yellow" && "bg-yellow-500"}`}
        onClick={() => colorChangeHandler(id, "yellow")}></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500
         ${color === "red" && "bg-red-500"}`}
        onClick={() => colorChangeHandler(id, "red")}></div>

      <img
        src={cancelImage}
        className='flex-shrink-0 w-4 h-4 ml-2 cursor-pointer'
        alt='Cancel'
        onClick={() => taskDeleteHandler(id)}
      />
    </div>
  );
}
