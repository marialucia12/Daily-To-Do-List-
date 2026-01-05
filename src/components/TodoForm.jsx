import { useState } from "react"

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === "") return
    onAddTodo(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe una tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  )
}

export default TodoForm
