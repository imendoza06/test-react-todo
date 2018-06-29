import React, { Component } from 'react';
import logo from './logo.svg';
import TodoApp from './Components/TodoApp';
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to <span className="App-genius">Genius</span> <span className="App-plaza">Plaza</span> To-Do App</h1>
        </header>
        <p className="App-intro">
          Enhance Your Productivity
        </p>
        <TodoApp />
      </div>
    );
  }
}

export default App;
