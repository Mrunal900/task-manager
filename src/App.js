import React, { useState, useEffect } from 'react';
import TaskForm from './TaskFrom';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const [taskToEdit, setTaskToEdit] = useState(null); // State to track the task being edited

  // Load tasks from localStorage when the app initializes
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    console.log(localStorage.getItem('tasks'));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    if (taskToEdit) {
      // Update existing task
      setTasks(tasks.map((t) => (t.id === taskToEdit.id ? { ...t, ...task } : t)));
      setTaskToEdit(null); // Clear editing state after updating
    } else {
      // Add new task
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{height: '100vh', width: '100vw', backgroundColor: '#4b4453', display: 'flex', justifyContent: 'space-between'}}>
      <div style={{width: '30%'}}>
      <TaskList tasks={tasks} editTask={editTask} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
      <div style={{width: '60%'}}>
        <TaskForm onSubmit={addOrUpdateTask} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit}/>
      </div>
      
    </div>
    
  );
};

export default App;
