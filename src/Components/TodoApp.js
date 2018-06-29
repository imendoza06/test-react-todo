import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            textInput: "",
            todos: [
                {
                    index: 1,
                    text: "Invite Ivan Mendoza phone interview.",
                    completed: false,
                },
                {
                    index: 2,
                    text: "Invite Ivan Mendoza onsite or video call to meet the team.",
                    completed: false,
                },
                {
                    index: 3,
                    text: "Hire Ivan Mendoza.",
                    completed: false,
                }
            ]
        };
    }
    // add new to do 
    addTodo = event => {
        event.preventDefault();

        const { textInput, todos } = this.state;
        const newTodo = { index: todos.length + 1, text: textInput, completed: false };
        const newTodos = [...todos, newTodo];

        if (!textInput) {
            return alert("Please add a new to do... \n Thanks!");
        }

        this.setState({
            textInput: "",
            todos: newTodos
        });
    };
    // toggle completed to do
    toggleCompleted = index => {
        const { todos } = this.state;
        const newTodos = todos.map(todo => {
            if (index === todo.index)
                todo.completed = !todo.completed;

            return todo;
        });

        this.setState({
            todos: newTodos
        });
    };
    // delete a to to
    removeTodo = index => {
        const { todos } = this.state;
        const newTodos = todos.filter((todo) => {
            return index !== todo.index
        });

        this.setState({
            todos: newTodos
        });
    };
    // handle new to do input
    handleTextInput = event => {
        this.setState({
            textInput: event.target.value
        });
    };

    render() {
        const { textInput, todos } = this.state;
        const todoCount = todos.length; // tracks count of to do
        const itemCount = todoCount === 1 ? `${todoCount} item` : `${todoCount} items`;
        return (
            <div>
                <TodoHeader />
            <div>
                {itemCount}
            </div>
                <TodoForm
                    inputName="textInput"
                    inputValue={textInput}
                    addTodo={this.addTodo}
                    handleTextInput={this.handleTextInput}
                />
                <TodoList todos={todos}
                    toggleCompleted={this.toggleCompleted}
                    removeTodo={this.removeTodo}
                />
            </div>
        );
    }
}

export default TodoApp;