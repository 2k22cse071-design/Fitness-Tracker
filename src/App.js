import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import SchedulePlanner from './components/SchedulePlanner';
import ProgressTracker from './components/ProgressTracker';
import Statistics from './components/Statistics';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [editingWorkout, setEditingWorkout] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts'));
    if (savedWorkouts) {
      setWorkouts(savedWorkouts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    const isDuplicate = workouts.some(
      (w) => w.name.toLowerCase() === workout.name.toLowerCase() && w.date === workout.date
    );

    if (isDuplicate) {
      alert("This workout is already scheduled for this date!");
      return;
    }

    setWorkouts([...workouts, { ...workout, completed: false }]);
  };


  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
  };

  const editWorkout = (updatedWorkout) => {
    setWorkouts(
      workouts.map((w) => (w.id === updatedWorkout.id ? updatedWorkout : w))
    );
    setEditingWorkout(null);
  };

  const toggleComplete = (id) => {
    setWorkouts(
      workouts.map((w) =>
        w.id === id ? { ...w, completed: !w.completed } : w
      )
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="container">
            <WorkoutForm
              addWorkout={addWorkout}
              editWorkout={editWorkout}
              editingWorkout={editingWorkout}
              setEditingWorkout={setEditingWorkout}
            />
            <WorkoutList
              workouts={workouts}
              deleteWorkout={deleteWorkout}
              setEditingWorkout={setEditingWorkout}
              toggleComplete={toggleComplete}
            />
          </div>
        );
      case 'planner':
        return <SchedulePlanner workouts={workouts} addWorkout={addWorkout} />;
      case 'tracker':
        return <ProgressTracker workouts={workouts} toggleComplete={toggleComplete} />;
      case 'stats':
        return <Statistics workouts={workouts} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;

