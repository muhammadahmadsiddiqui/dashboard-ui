import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <i className="book-icon">📚</i> {/* You can replace this with an actual icon */}
      </div>
      <nav>
        <ul>
          <li>Calendar</li>
          <li>Tasks</li>
          <li>Files</li>
          <li>Exams</li>
        </ul>
      </nav>
      <div className="logout-button">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Header;
