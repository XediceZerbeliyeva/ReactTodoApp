import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import '../css/TodoCreate.css';
import { FaCheck } from "react-icons/fa";
function Todo({ todo, onremoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const [ediatable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);
    const removeTodo = () => {
        onremoveTodo(id);
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '10px' }}>
            <div>
                {
                    ediatable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} style={{ border: 'none' }} className='todo-input' type="text" /> : content
                }
            </div>
            <div >
                <IoIosRemoveCircle onClick={removeTodo} className='todo-icons' />
                {
                    ediatable ? <FaCheck className='todo-icons' onClick={updateTodo} /> : <MdEdit className='todo-icons' onClick={() => { setEditable(true) }} />
                }


            </div>
        </div>
    )
}

export default Todo;