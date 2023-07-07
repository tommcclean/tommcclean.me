"use client"; // This is a client component 👈🏽
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import TodoItem from '../../components/todo/todo'

export default function Todo() {
  const [ inputValue, setInputValue ] = useState("");

  const [ todos, setTodos ] = useState([])

  const addTodo = (event) => {
    event.preventDefault();

    if (inputValue === '') {
      return;
    }

    const newList = [
      ...todos,
      {
        title: inputValue,
        id: uuidv4()
      }
    ]

    setTodos(newList)
    setInputValue("")
  }


  const handleNewInputChange = (event) => {
    setInputValue(event.currentTarget.value)
  }

  const handleRename = (todo) => {
    setTodos([
      ...todos.filter(t => t.id !== todo.id),
      todo
    ])
  }

  const handleDelete = (id) => {
    const newList = [
      ...todos.filter(t => t.id !== id)
    ]

    setTodos(newList)
  }

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={addTodo}>
        <input placeholder="Add a todo" onChange={handleNewInputChange} value={inputValue} required type="text" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo =>
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} handleRename={handleRename} />
        )}
        
      </ul>
    </>
  )
}