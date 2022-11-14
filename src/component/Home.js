import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewTodo from './NewTodo';
import Todos from './Todos';

const Home = () => {
  const [todos,setTodos]=useState([])
    const handleAddTodo=(todo)=>{
    setTodos((prev)=>{
      return [...prev,{id:uuidv4(),todo}]
    })
    }
    const handleDelete=(id)=>{
const stayedArr=todos.filter(todo=>todo.id!==id)
setTodos(stayedArr)
    }
  
  return (
    <div className='text-center bg-orange-400 flex flex-col justify-center content-center'>
      <div>
        <h2 className='text-4xl font-semibold text-white'>
          What's on Your Mind ?
        </h2>
      </div>
      <NewTodo onAddTodo={handleAddTodo}></NewTodo>
      <Todos myTodo={todos} handleDelete={handleDelete}></Todos>
    </div>
  );
};

export default Home;
