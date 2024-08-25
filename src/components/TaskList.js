import React from 'react';
import './TaskList.css';

function TaskList({ tasks }) {
  return (
    <div className="task-list card">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" />
            <span className="task-title">{task.title}</span>
            <span className="task-due">{task.due}</span>
          </li>
        ))}
      </ul>
      <a href="#">Manage Tasks</a>
    </div>
  );
}

export default TaskList;
