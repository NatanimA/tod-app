// eslint-disable-next-line
import React, { useState } from 'react';

const AddToDO = (props) => {
  const { onHandleAddToDO } = props;
  const [state, setState] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    onHandleAddToDO(state);
    form.reset();
  };
  const handleOnchange = (e) => {
    setState(e.target.value);
  };
  return (
        <form className="input-form" onSubmit={onHandleSubmit}>
           <input onChange={handleOnchange} type='text'/>
        </form>
  );
};

export default AddToDO;