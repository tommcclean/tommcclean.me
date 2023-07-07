"use client"; // This is a client component 👈🏽
import { useState } from 'react'
import TodoItem from '../../components/todo/todo'

export default function Todo() {
  const [ inputValue, setInputValue ] = useState("");
  const [ todos, setTodos ] = useState(['Todo 1', 'Todo 2', 'Test Todo'])

  function addTodo (event) {
    event.preventDefault();

    const newList = [
      ...todos,
      inputValue
    ]

    setTodos(newList)
    setInputValue("")
  }

  function handleChange (event) {
    setInputValue(event.currentTarget.value)
  }

  function handleDelete(todo) {
    const newList = [
      ...todos.filter(t => t !== todo)
    ]
    setTodos(newList)
  }

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={addTodo}>
        <input placeholder="Add a todo" onChange={handleChange} value={inputValue} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo =>
          <TodoItem key={todo} todo={todo} handleDelete={handleDelete} />
        )}
        
      </ul>
    </>
  )
}