import React, { useState } from 'react';

const SchedulePlanner = ({ workouts, addWorkout }) => {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !duration || !date) return;

        addWorkout({ name, duration, date, id: Date.now(), completed: false });

        setName('');
        setDuration('');
        setDate('');
    };

    const scheduledWorkouts = workouts.filter(w => new Date(w.date) >= new Date().setHours(0, 0, 0, 0));

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Schedule a Workout</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        placeholder="Workout Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="number"
                        placeholder="Duration (mins)"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Plan Workout</button>
                </form>
            </div>

            <div style={styles.card}>
                <h2 style={styles.title}>Upcoming Workouts</h2>
                {scheduledWorkouts.length === 0 ? (
                    <p>No upcoming workouts scheduled.</p>
                ) : (
                    <ul style={styles.list}>
                        {scheduledWorkouts.sort((a, b) => new Date(a.date) - new Date(b.date)).map(workout => (
                            <li key={workout.id} style={styles.listItem}>
                                <div>
                                    <strong style={styles.workoutName}>{workout.name}</strong>
                                    <span style={styles.workoutDate}>{workout.date}</span>
                                </div>
                                <span style={styles.workoutDuration}>{workout.duration} mins</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    card: {
        background: '#ffffff',
        padding: '2rem',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
    },
    title: {
        color: '#111827',
        marginBottom: '1.5rem',
        fontSize: '1.25rem',
        fontWeight: '600',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    input: {
        padding: '0.75rem',
        borderRadius: '0.5rem',
        border: '1px solid #e5e7eb',
        fontSize: '1rem',
        outline: 'none',
    },
    button: {
        padding: '0.75rem',
        borderRadius: '0.5rem',
        border: 'none',
        backgroundColor: '#4f46e5',
        color: 'white',
        fontWeight: '500',
        cursor: 'pointer',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0',
        borderBottom: '1px solid #f3f4f6',
    },
    workoutName: {
        display: 'block',
        fontSize: '1rem',
        color: '#111827',
        fontWeight: '500',
    },
    workoutDate: {
        fontSize: '0.875rem',
        color: '#6b7280',
    },
    workoutDuration: {
        fontSize: '0.875rem',
        color: '#4b5563',
        backgroundColor: '#f3f4f6',
        padding: '0.25rem 0.625rem',
        borderRadius: '9999px',
    }
};


export default SchedulePlanner;
