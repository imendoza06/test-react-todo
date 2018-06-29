import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleCompleted, removeTodo }) => {
  return (
    <div>
      <ul className="todoList">
        {todos.map(todo => <TodoItem todo={todo}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo} />)}
      </ul>
    </div>
  );
}

export default TodoList;