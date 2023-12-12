import React, { useState } from 'react'
import TodoForm from './components/TodoForm';
 import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos ] = useState([
    {
      id:  Math.round(Math.random()* 9999),
     text:'Wash clothes',
     isCompleted: false
    },
    {
      id:  Math.round(Math.random()* 9999),
      text:'Wash shoes',
      isCompleted: false
     },
     {
      id: Math.round(Math.random()* 9999),
      text:'Wash mind',
      isCompleted: false
     }
  ]);

  //  const [showCompleted , setShowCompleted]  = useState(true)


  const createTodo = (todo) => {
    const updatedTodos = 
    [...todos, {
      id:  Math.round(Math.random()* 9999),
      text:todo}
    ] ;
    setTodos(updatedTodos)
};

const checkboxClick = (id) => {
  const updatedTodos = todos.map((todo) => 
   todo.id === id ? {
    ...todo , isCompleted: !todo.isCompleted } : todo
  );
  setTodos(updatedTodos);
   }
  
  
//   const completedTodo = todos.find((todo) => 
//   todo.id === id);
//   if (completedTodo && completedTodo.isCompleted){
//     setCompletedTodos([
//       ...completedTodos, completedTodo]);
//   } else {
//     const updatedCompletedTodos = completedTodos.filter((todo) => todo.id !== id)
//     setCompletedTodos(updatedCompletedTodos)
//   }
// }

// const markComplete = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
//     setTodos(updatedTodos);
// };

const editTodo = (id, newText) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todos, text: newText}
    }
    return todo;
  })
  setTodos(updatedTodos)
}

const deleteTodo = (id) => {
  const updatedTodos = todos.filter((todo) => {
    return todo.id !== id;
  })
    setTodos(updatedTodos)
}

  return (
    <div className='container'>
      
    <TodoForm onCreate={createTodo} />
    <div  className='todo-list'>
     <TodoList 
    todos={todos}
    onDelete={deleteTodo}
    onEdit={editTodo}
    onCheckboxClick={checkboxClick}
     />
     </div>

     {/* <h2>Completed Todos</h2>
     <ul>
      {completedTodos.map((completedTodo) => 
         <TodoList key={completedTodo.id}
        //  todo={completedTodo}
         onCheckboxClick={() => {}}
         />
      )}
     </ul> */}
      
     {/* onEdit={editTitle} 
     onDelete={deleteTodo} 
     onMarkComplete={markComplete}/>  */}
    </div>
  )
}

export default App