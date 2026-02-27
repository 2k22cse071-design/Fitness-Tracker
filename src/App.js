import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [editingWorkout, setEditingWorkout] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts'));
    if (savedWorkouts) {
      setWorkouts(savedWorkouts);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
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

  return (
    <div className="App">
      <Navbar />
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
        />
      </div>
    </div>
  );
}

export default App;
