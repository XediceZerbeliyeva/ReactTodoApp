import React from 'react'
import Todo from './Todo'

function TodoList({todos,onremoveTodo,onUpdateTodo}) {
  return (
    <div style={{width:'100%',marginTop:'50px'}}>
      {
        todos && todos.map((todo,id)=>(
        <Todo onremoveTodo={onremoveTodo} key={id} todo={todo} onUpdateTodo ={onUpdateTodo}/>
        ))
      }
    </div>
  )
}

export default TodoList