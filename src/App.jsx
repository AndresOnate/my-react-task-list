import Header from './components/Header'
import { TaskList } from './components/TasksList'

import './App.css'

const latestTask = [
  { name: "Buy a new gaming laptop", completed: true },
  { name: "Create video for Youtube", completed: false },
  { name: "Create a new portafolio site" , completed: false },
];

function App() {

  return (
    <div className="App">
      <Header />
      <TaskList list={latestTask} /> 
    </div>
  )
}

export default App
