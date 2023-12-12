import React from 'react'
import Todo from './Todo'

function TodoList({todos , onDelete , onEdit , onCheckboxClick}) 
 {
    const renderedTodos = todos.map((todo) => {
        return <Todo 
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onEdit={onEdit}
        onCheckboxClick={onCheckboxClick}
        
        />
    });

  return (
    <div>
        {renderedTodos}
   </div>
  )
}

export default TodoList