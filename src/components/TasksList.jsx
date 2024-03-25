import { Task } from "./Task";

export const TaskList = ({
    todos,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Task key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}  
        />
      ))}
    </ul>
  );
};
