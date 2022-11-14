import React from 'react';

const Todo = ({myTodo,handleDelete}) => {
    // console.log(myTodo);
    const {id,todo}=myTodo
  return (
    <div>
      <div className='text-3xl flex my-5 font-normal justify-center items-center capitalize text-white'>
        <div >
        <h2>{todo.title}</h2>
        <h2>{todo.bio}</h2>
        </div>
        <button className='btn bg-red-600 ml-4' onClick={()=>handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
