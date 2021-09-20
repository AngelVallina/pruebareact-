import logo from './logo.svg';
import './App.css';
import { todos } from './todos';
import React from 'react';

import Tasks  from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends React.Component {
  
  state = {
    tasks: todos
  }
  render() {
    return (
      <div>
       <Tasks tasks={this.state.tasks}></Tasks>
       <TaskForm></TaskForm>
      </div>
    )
  }
}

export default App;
