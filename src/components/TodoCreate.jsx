import React, { useState } from 'react'
import '../css/TodoCreate.css'
function TodoCreate({onCreateTodo}) {
   const [newTodo,setNewTodo]=useState('');
   const inputClear=()=>{
    setNewTodo(' ');
   }
        const   createTodo=()=>{
            if(!newTodo){return}
            const request={
                id:Math.floor(Math.random()*99999999),
                content:newTodo
            }
            onCreateTodo(request);
            inputClear();
        }
    return (
        <div>
            <div className='todo-create'>
                <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}  className='todo-input' type="text" placeholder='Todo daxil edin ...' name="" id="" />
                <button onClick={createTodo} className='todo-create-button '>Todo Yarat</button>
            </div>
        </div>
    )
}

export default TodoCreate