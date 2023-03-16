import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/double-tick.png";
import noteImage from "../assets/notes.png";
import plusImage from "../assets/plus.png";
import addTodo from "../redux/todos/thunk/addTodo";
import {
  allCompletedAction,
  clearCompletedAction,
} from "../redux/todos/todoActions";

export default function Header() {
  // Dispatch
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState("");

  // Input data handle function
  const inputHandle = e => {
    setInputData(e.target.value);
  };

  // Submit handler function
  const submitHandler = e => {
    e.preventDefault();
    // dispatch(addedAction(inputData));
    dispatch(addTodo(inputData));
    setInputData("");
  };

  // Complete all tasks function
  const completeAllTasks = () => {
    dispatch(allCompletedAction());
  };

  // Clear Complete all tasks function
  const clearComplete = () => {
    dispatch(clearCompletedAction());
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className='flex items-center bg-gray-100 px-4 py-4 rounded-md'>
        <img src={noteImage} className='w-6 h-6' alt='Add todo' />
        <input
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
          value={inputData}
          onChange={inputHandle}
        />
        <button
          type='submit'
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}></button>
      </form>

      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li className='flex space-x-1 cursor-pointer'>
          <img
            className='w-4 h-4'
            src={tickImage}
            alt='Complete'
            onClick={completeAllTasks}
          />
          <span>Complete All Tasks</span>
        </li>

        <li onClick={clearComplete} className='cursor-pointer'>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
