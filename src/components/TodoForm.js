import React, {useState} from 'react'

function TodoForm({onCreate}) {
  const[value,setValue] =  useState('')

  const handleChange =(event) => {
    setValue(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(value);
    setValue('')
  }

  return (
    <div>
      <div className='div'><h1>My Todos</h1></div>
      <div>
      <form onSubmit={handleSubmit}>
        <input
        value={value}
        placeholder='Add a task'
        onChange={handleChange}
         />
        <button className='save-btn'>Save</button>
      </form>
    </div>
    </div>
  )
}

export default TodoForm