import React, { useState } from 'react';

const NewTodo = ({onAddTodo}) => {
  const [todo,setTodo]=useState({title:'',bio:''})
  const {title,bio}=todo
  const handleChange=(event)=>{
    setTodo((oldTodo)=>{
      return {...oldTodo,[event.target.name]:event.target.value}
    })
  }
  const handleSubmit=event=>{
    event.preventDefault()
    onAddTodo(todo)
    setTodo({title:'',bio:''})
  }
  return (
    <div>
      
      <form action='' onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered mt-4 input-warning w-full max-w-xs'
              name='title'
              value={title}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className='textarea w-80 my-3 textarea-warning'
              placeholder='Bio'
              name='bio'
              value={bio}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className=''>
            <button
              className='btn text-white bg-teal-600 border-teal-600 hover:bg-teal-500 hover:border-teal-500'
              type='submit'
            >
              Submit Form
            </button>
          </div>
        </form>
    </div>
  );
};

export default NewTodo;