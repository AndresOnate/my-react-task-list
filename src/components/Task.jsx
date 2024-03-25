import React from "react";
import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from "./TodoUpdate";

export const Task = ({
      todo,
      handleUpdateTodo,
      handleDeleteTodo,
      handleCompleteTodo,

  }) => {
    return (
      <li>
        <span onClick={() => handleCompleteTodo(todo.id)}>
          <label htmlFor="" className={`container-done ${todo.completed ? 'active' : ''}`}></label>
        </span>
        <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
  
        <button className='btn-delete' onClick={() => handleDeleteTodo(todo.id)} ><FaTrash /></button>
      </li>
    );
};
