import './App.css';
import NewTask from './Components/NewTask';
import TasksList from './Components/TaskList';
import React, { useState, useEffect } from 'react';


function App() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, [name]: value, id: Date.now(), }));
  };

// access local data
  const getLocalData = () =>{
    let localData = localStorage.getItem('allTasks');
    if(localData) {
      return JSON.parse(localData);
    } else {
      return [];
    }
  }

  const [allTasks, setAllTasks] = useState(getLocalData());


  // add task data to local storage
  useEffect(() => {
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
  }, [allTasks])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title)
      return
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };

  return (
    <main>
      <h1>To Do List</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <TasksList
        allTasks={allTasks} handleDelete={handleDelete}
      />
    </main>
  );
}

export default App;
