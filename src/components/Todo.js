import React, {useState} from 'react';
import TodoEdit from './TodoEdit'

function Todo({todo, onDelete , onEdit , onCheckboxClick}) {
  const [editTodo, setEditTodo] = useState(false)

  const handleDelete = () => {
   onDelete(todo.id)
  }
  
  const handleEdit = () =>{
   setEditTodo(!editTodo)
  }

  let content = <h3>{todo.text}</h3>
  if (editTodo) {
    content = <TodoEdit todo={todo} onEdit={onEdit}/>
  }

  return (
    <div className='todo'>
      <p className='inline'>
     <input className='checkbox'
     key={todo.id}
     type='checkbox'
     checked={todo.isCompleted}
     onChange={() => onCheckboxClick(todo.id)}
     />
    <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>
      {content}
      </span>
      </p>
      <button 
      className='edit-btn' 
      onClick={handleEdit}>Edit</button>
      <button 
      className='remove-btn'
      onClick={handleDelete}>Remove</button>
     
    </div>

//     <p style={{textDecoration : todo.isCompleted ? "line-through" : ""}}>

//     <input
//      type={"checkbox"} 
//      onChange={() => onMarkCompleted(index)} name={"completed"}
//      id={todo.id}/>{' '}
//      {todo.text}
//      <button>Edit</button>
//      <button>Delete</button>
// </p>
  )
  
}

export default Todo