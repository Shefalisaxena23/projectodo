import React, {useState} from 'react'

function TodoEdit({todo , onEdit}) {
  const [newTodo , setNewTodo] = useState(todo.text)

  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   onEdit(todo.id, newTodo)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        onChange={handleChange}
        value={newTodo}
         />
        <button className='update-btn'>Save</button>
      </form>
    </div>
  )
}

export default TodoEdit