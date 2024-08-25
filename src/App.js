import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Card title="Upcoming Events" events={[
          { date: '23', title: 'CS101 Lecture', time: '9:00 AM - 10:30 AM' },
          { date: '25', title: 'Math Quiz', time: '2:00 PM - 3:00 PM' },
          { date: '28', title: 'English Assignment Due', time: '11:59 PM' },
        ]} />
        <TaskList tasks={[
          { title: 'Finish CS101 homework', due: 'Due Today' },
          { title: 'Study for Math quiz', due: 'Due Tomorrow' },
          { title: 'Write English essay', due: 'Due Friday' },
        ]} />
        <Card title="Upcoming Exams" events={[
          { date: '5', title: 'CS101 Midterm', time: '9:00 AM - 11:00 AM' },
          { date: '12', title: 'Math Final', time: '1:00 PM - 3:00 PM' },
          { date: '19', title: 'English Oral Exam', time: '10:00 AM - 12:00 PM' },
        ]} />
      </div>
    </div>
  );
}

export default App;
