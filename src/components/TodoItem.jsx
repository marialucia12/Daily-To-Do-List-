function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="item">
      <button onClick={() => onToggle(todo.id)}>
        {todo.completed ? "✅" : "⬜"}
      </button>

      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          marginLeft: "8px"
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  )
}

export default TodoItem
