import React, { useState } from 'react'
import type { Todo } from '../types'

type Props = {
todos: Todo[]
onAdd: (text: string) => void
onUpdate: (id: string, patch: Partial<Todo>) => void
onDelete: (id: string) => void
}

type ItemProps = {
  todo: Todo
  onUpdate: (id: string, patch: Partial<Todo>) => void
  onDelete: (id: string) => void
}

function TodoItem({ todo, onUpdate, onDelete }: ItemProps) {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(todo.text)

  function handleSave() {
    if (text.trim()) {
      onUpdate(todo.id, { text })
      setEditing(false)
    }
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onUpdate(todo.id, { completed: e.target.checked })}
        aria-label="Mark as complete"
      />
      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setEditing(true)}>{todo.text}</span>
      )}
      <button onClick={() => onDelete(todo.id)} className="delete-btn" aria-label="Delete todo">Delete</button>
    </li>
  )
}


export default function TodoList({ todos, onAdd, onUpdate, onDelete }: Props) {
const [input, setInput] = useState('')


function handleSubmit(e: React.FormEvent) {
e.preventDefault()
onAdd(input)
setInput('')
}


return (
<section className="todo-section">
<form className="todo-form" onSubmit={handleSubmit} aria-label="Add todo">
<input
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="What do you want to do?"
aria-label="New todo"
/>
<button type="submit" className="add-btn">Add</button>
</form>


<ul className="todo-list" role="list">
{todos.length === 0 && <li className="empty">No tasks — add your first one ✨</li>}
{todos.map((t) => (
<TodoItem key={t.id} todo={t} onUpdate={onUpdate} onDelete={onDelete} />
))}
</ul>
</section>
)
}

