import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]); // todolari saxlamaq ucun yaradilir
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    console.log(todos);
  }
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
    console.log('silinib' + todos);
  }
  const updateTodo = (newTodo) => {
    setTodos([... todos.map((todo) => { //bir deyisene beraber edib elede spread ede bilerdik
      if (todo.id !== newTodo.id) {
        return todo;
      }
      else {
        return newTodo;
      }
    }
    )])
  
  }
  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList onremoveTodo={removeTodo} todos={todos} onUpdateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App
