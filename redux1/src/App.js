import React from 'react';
import './App.css';
import Header from './component/Header';
import TaskList from './component/TaskList';

function App() {
  return (
    <div className="App">
    <Header/>
    <TaskList/>
    </div>
  );
}

export default App;
