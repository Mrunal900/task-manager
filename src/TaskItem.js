import React from 'react';
import { GoIssueClosed } from "react-icons/go";
import { AiTwotoneDelete, AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";





const TaskItem = ({ task, editTask, updateTask, deleteTask }) => {
  const toggleCompletion = () => {
    updateTask(task.id, { isCompleted: !task.isCompleted });
  };

  return (
    <div className="list-group mb-3 mx-auto shadow" style={{width: '90%', backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
      <div className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className={`mb-1 ${task.isCompleted ? 'text-decoration-line-through' : ''}`}>
              {task.name}
            </h5>
            <p className="mb-1">{task.description}</p>
            <small className="text-muted">Due: {task.dueDate}</small>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 5}}>
            <div onClick={toggleCompletion} >
            {task.isCompleted ? <AiOutlineCloseCircle  size={24} color='#FF9D23'/> : <GoIssueClosed size={24} color='green'/>}
            </div>
            <AiTwotoneDelete  size={24} color='red' onClick={() => deleteTask(task.id)}/>
              <AiFillEdit size={24}  onClick={() => editTask(task)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
