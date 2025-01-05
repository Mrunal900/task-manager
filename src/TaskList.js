import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask, updateTask }) => (
  <div style={{height: '100%',backgroundColor: '#845ec2', overflowX: 'auto', paddingTop: '20px'}}>
    {tasks?.length > 0 && <h1 className="text-center mb-4" style={{color: '#fbeaff'}}>Tasks</h1>}
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        editTask={editTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    ))}
  </div>
);

export default TaskList;
