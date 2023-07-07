export default function Todo({ todo, handleDelete}) {
  return (
    <li>
      {todo}
      <button type="button" onClick={() => handleDelete(todo)}>Delete</button>
    </li>
  )
}