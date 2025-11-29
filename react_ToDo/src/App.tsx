import { useState } from 'react'
import TodoList from './components/ToDo'
import type { Todo } from './types'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const completedCount = todos.filter(t => t.completed).length
  const totalCount = todos.length

  function handleAdd(text: string) {
    if (text.trim()) {
      setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }])
    }
  }

  function handleUpdate(id: string, patch: Partial<Todo>) {
    setTodos(todos.map(t => t.id === id ? { ...t, ...patch } : t))
  }

  function handleDelete(id: string) {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="app">
      <h1>📝 Todo List</h1>
      {totalCount > 0 && (
        <div className="stats">
          <span>Total: {totalCount}</span>
          <span>Completed: {completedCount}</span>
          <span>Pending: {totalCount - completedCount}</span>
        </div>
      )}
      <TodoList todos={todos} onAdd={handleAdd} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  )
}

export default App
