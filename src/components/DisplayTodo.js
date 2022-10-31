import React from 'react';


const DisplayTodo = () => {
  const todos  = JSON.parse(localStorage.getItem('todos'));

  const todoList = todos.map((todo) => (
        <div className='content-container' key={todo.id}>
            <input type='checkbox' />
            <p className='content-paragraph'>{todo.content}</p>
            
        </div>
  ));
  return (
    <div className="todo-container">
        {todoList}
    </div>
  );
};

export default DisplayTodo;