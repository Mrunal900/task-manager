import React, { useEffect, useState } from 'react';

const TaskForm = ({ onSubmit, taskToEdit, setTaskToEdit }) => {
  const [taskName, setTaskName] = useState(taskToEdit?.name || '');
  const [description, setDescription] = useState(taskToEdit?.description || '');
  const [dueDate, setDueDate] = useState(taskToEdit?.dueDate || '');

    useEffect(() => {
      if (taskToEdit) {
        setTaskName(taskToEdit.name);
        setDescription(taskToEdit.description);
        setDueDate(taskToEdit.dueDate);
      } else {
        setTaskName('');
        setDescription('');
        setDueDate('');
      }
    }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: taskName, description, dueDate, isCompleted: taskToEdit?.isCompleted || false });
    setTaskName('');
    setDescription('');
    setDueDate('');
  };

  const handleCancel = () => {
    setTaskToEdit(null); // Reset editing state
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{width: '100%', height: '100%'}}>    
    <div className="p-4 rounded-4" style={{width: '500px', backgroundColor: '#b0a8b9'}}>
    <h1 className="text-center mb-4" style={{color: '#fbeaff'}}>Task Manager</h1>
    <form onSubmit={handleSubmit} className="mb-4 text-white">
    <div className="mb-3">
      <label className="form-label">Task Name</label>
      <input
        type="text"
        className="form-control"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Description</label>
      <textarea
        className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Due Date</label>
      <input
        type="date"
        className="form-control"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
    </div>
    <button type="submit" className="btn btn-primary">
        {taskToEdit ? 'Save Changes' : 'Add Task'}
      </button>
      {taskToEdit && (
            <button type="button" className="btn btn-danger ms-2" onClick={handleCancel}>
              Cancel
            </button>
          )}
      
  </form>
  </div></div>

  );
};

export default TaskForm;
