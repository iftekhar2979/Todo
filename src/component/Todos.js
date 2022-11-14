import React from 'react';
import Todo from './Todo';

const Todos = ({myTodo,handleDelete}) => {
// const {id ,todo}=myTodo
    return (
        <section className='p-5'>
        {myTodo.map(item=>{
            return (<Todo myTodo={item} key={item.id} handleDelete={handleDelete}></Todo>)
        })}
        </section>
    );
};

export default Todos;