import React from 'react'
import './index.css'

const TodoItem = ({todoDetails, deleteTodo}) => {
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <div className="todo-item">
      <p>{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
