import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ShowTasklist } from './components/ShowTasklist';
import { AddTasklist } from './components/AddTasklist';
import './App.css';


function App() {
  const [tasklist,setTasklist]=useState(JSON.parse(localStorage.getItem('tasklist'))||[]);
  const [task,setTask]=useState({})
  useEffect(()=>{
    localStorage.setItem('tasklist',JSON.stringify(tasklist))
  },[tasklist])
  return (
    <div className="App">
      <Header />
      <AddTasklist tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
      <ShowTasklist tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}/>  
    </div>
  );
}

export default App;
