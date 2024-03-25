import Header from './components/Header'
import { TaskList } from './components/TasksList'
import { useTodo } from './hooks/useTodo';
import { TodoAdd } from './components/TodoAdd';
import './App.css'


const latestTask = [
  { name: "Buy a new gaming laptop", description: "Buy", completed: true },
  { name: "Create video for Youtube", description: "Create Video", completed: false },
  { name: "Create a new portafolio site" , description: "Creat Portafolio", completed: false },
];

function App() {

  const {
		todos,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

  return (
    <div className="card-to-do">
      <Header />
      <div className="add-todo">
        <h3>Agregar Tarea</h3>
        <TodoAdd handleNewTodo={handleNewTodo} />
      </div>
      <TaskList todos={todos} handleDeleteTodo={handleDeleteTodo} 
                handleUpdateTodo={handleUpdateTodo}
                handleCompleteTodo={handleCompleteTodo} /> 
    </div>
  )
}

export default App
