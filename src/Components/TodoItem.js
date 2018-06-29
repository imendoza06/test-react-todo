import React from 'react';

const TodoItem = ({ todo, toggleCompleted, removeTodo }) => {
    const { index, text, completed } = todo;
    const className = completed ? "completed" : "";

    return (
        <li className={className}>
            <button type="button" className="todoItem-btn"
                onClick={() => removeTodo(index)}>x</button>
            <input className="todoItem-check"
                type="checkbox"
                onClick={() => toggleCompleted(index)} />
            <label className="todoItem-label">
                {text}
            </label>
        </li>
    );
};

export default TodoItem;