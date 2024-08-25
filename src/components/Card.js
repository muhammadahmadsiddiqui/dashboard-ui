import React from 'react';
import './Card.css';

function Card({ title, events }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <div className="event-date">{event.date}</div>
            <div className="event-details">
              <span className="event-title">{event.title}</span>
              <span className="event-time">{event.time}</span>
            </div>
          </li>
        ))}
      </ul>
      <a href="#">View {title.split(' ')[1]}</a>
    </div>
  );
}

export default Card;
