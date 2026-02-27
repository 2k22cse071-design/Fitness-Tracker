import React from 'react';

const WorkoutList = ({ workouts, deleteWorkout, setEditingWorkout }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Your Workouts</h2>
            {workouts.length === 0 ? (
                <p style={styles.empty}>No workouts added yet. Start tracking today!</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Workout</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workouts.map((workout) => (
                            <tr key={workout.id}>
                                <td>{workout.name}</td>
                                <td>{workout.duration} mins</td>
                                <td>{workout.date}</td>
                                <td>
                                    <div style={styles.actions}>
                                        <button
                                            onClick={() => setEditingWorkout(workout)}
                                            style={styles.editBtn}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteWorkout(workout.id)}
                                            style={styles.deleteBtn}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

const styles = {
    container: {
        marginTop: '2rem',
    },
    title: {
        marginBottom: '1rem',
        fontSize: '1.25rem',
        color: '#111827',
    },
    empty: {
        color: '#6b7280',
        textAlign: 'center',
        padding: '2rem',
        background: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    actions: {
        display: 'flex',
        gap: '0.5rem',
    },
    editBtn: {
        backgroundColor: '#eff6ff',
        color: '#1d4ed8',
        padding: '0.4rem 0.8rem',
        fontSize: '0.875rem',
    },
    deleteBtn: {
        backgroundColor: '#fef2f2',
        color: '#b91c1c',
        padding: '0.4rem 0.8rem',
        fontSize: '0.875rem',
    }
};

export default WorkoutList;
