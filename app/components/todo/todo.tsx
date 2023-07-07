export default function Todo({ todo, handleDelete}) {
  const { title, id } = todo

  return (
    <li>
      {title}
      <button type="button" onClick={() => handleDelete(id)}>Delete</button>
    </li>
  )
}