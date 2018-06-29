import React from 'react';

const TodoForm = ({ inputName, inputValue, handleTextInput, addTodo }) => {
  return (
    <form className="form-inline" onSubmit={addTodo}>
      <input
        className="form-input"
        type="text"
        placeholder="add a new to do..."
        name={inputName}
        value={inputValue}
        onChange={handleTextInput}
      />
      <button className="form-btn" type="submit"> Add </button>
    </form>
  );
}

export default TodoForm;