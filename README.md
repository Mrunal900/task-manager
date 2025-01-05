# Task Manager Web Application

## Overview

This project is a **Task Management Web Application** designed to allow users to manage their tasks effectively. The application supports features such as adding, editing, deleting, and marking tasks as completed. It also integrates **local storage** to ensure task data persists across page reloads and uses **Bootstrap** for a responsive and visually appealing UI.

---



## Features

### 1. Add Tasks
- Users can add tasks with the following details:
  - Task name
  - Description
  - Due date
- Form validation ensures all fields are required.

### 2. Edit Tasks
- Users can edit existing tasks.
- Form fields are pre-filled with the task data for easy modification.
- Changes can be saved or canceled.

### 3. Delete Tasks
- Users can remove tasks from the task list.
- Includes an optional confirmation dialog for deletion.

### 4. Mark Tasks as Completed
- Users can mark tasks as completed with a checkbox.
- Completed tasks are visually distinguished using a strikethrough effect.

### 5. Local Storage Persistence
- Tasks persist across page reloads by leveraging **localStorage**.
- The application retrieves tasks from localStorage on load and updates the storage whenever tasks are modified.

### 6. Responsive UI with Bootstrap
- Fully responsive design for desktop, tablet, and mobile devices.
- Uses **Bootstrap's grid system** and components for a clean and intuitive layout.

---

## Technologies Used

### Frontend
- **React** for building UI components and managing application state.
- **Bootstrap** for styling and responsive design.

### State Management
- **React useState** for managing component state.

### Persistence
- **localStorage** for storing and retrieving task data.

### Other Libraries
- **React Hooks** such as `useEffect` for synchronizing data.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```

2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Usage

### Adding a Task
- Click the **Add Task** button.
- Fill in the task details in the form and submit.

### Editing a Task
- Click the **Edit** button next to the task you want to modify.
- Update the details in the form and save changes.

### Deleting a Task
- Click the **Delete** button next to the task you want to remove.
- Confirm the deletion if prompted.

### Marking a Task as Completed
- Use the checkbox next to a task to mark it as completed.

---

## File Structure

```
.
├── public
│   └── index.html
├── src
│   |── TaskItem.js
│   |── TaskForm.js
│   |── TaskList.js
│   └── App.js
├── package.json
└── README.md
```

---

## Roadmap

### Future Enhancements
- Add task categories and filters.
- Implement drag-and-drop functionality for task reordering.
- Integrate a backend API for multi-user support.
- Add a priority feature for tasks.

---

## Acknowledgements

- **React Documentation**: [React Docs](https://reactjs.org/docs/getting-started.html)
- **Bootstrap Documentation**: [Bootstrap Docs](https://getbootstrap.com/docs/)

---

## Contact

For any questions or feedback, please contact:
- **Email**: mrunalwaghdhare786@gmail.com

