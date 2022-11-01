// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const DisplayTodo = (props) => {
  const { onHandleCheckBoxChange, onDeleteHandler } = props;
  const todos = JSON.parse(localStorage.getItem('todos'));

  const onhandleDelete = (id) => {
    onDeleteHandler(id);
  };

  let todoList = null;

  if (todos !== null) {
    todoList = todos.map((todo) => (
        <div className='content-container' key={todo.id}>
          <input id={todo.id} onChange={() => { onHandleCheckBoxChange(todo.id); }} type='checkbox' />
          <p className='content-paragraph'>{todo.content}</p>
          <FontAwesomeIcon onClick={() => { onhandleDelete(todo.id); }} className='trash-icons' icon={icon({ name: 'trash', family: 'sharp', style: 'solid' })} />
        </div>
    ));
  }

  return (
    <div className="todo-container">
        {todoList}
    </div>
  );
};

export default DisplayTodo;