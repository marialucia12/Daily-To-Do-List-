import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      <h1> Daily To-Do List:  </h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}

export default App
