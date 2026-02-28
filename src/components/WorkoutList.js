import React from 'react';

const WorkoutList = ({ workouts, deleteWorkout, setEditingWorkout, toggleComplete }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>All Workouts</h2>
            {workouts.length === 0 ? (
                <div style={styles.emptyState}>
                    <p>No workouts found. Time to break a sweat!</p>
                </div>
            ) : (
                <div style={styles.grid}>
                    {workouts.slice().reverse().map((workout) => (
                        <div key={workout.id} style={{ ...styles.card, ...(workout.completed ? styles.completedCard : {}) }}>
                            <div style={styles.cardHeader}>
                                <h3 style={{ ...styles.workoutName, textDecoration: workout.completed ? 'line-through' : 'none' }}>
                                    {workout.name}
                                </h3>
                                <div style={styles.statusBadge}>
                                    {workout.completed ? '✅ Done' : '⏳ Pending'}
                                </div>
                            </div>

                            <div style={styles.details}>
                                <div style={styles.detailItem}>
                                    <span style={styles.detailLabel}>Duration</span>
                                    <span style={styles.detailValue}>{workout.duration} mins</span>
                                </div>
                                <div style={styles.detailItem}>
                                    <span style={styles.detailLabel}>Date</span>
                                    <span style={styles.detailValue}>{workout.date}</span>
                                </div>
                            </div>

                            <div style={styles.actions}>
                                <button
                                    onClick={() => toggleComplete(workout.id)}
                                    style={styles.completeBtn}
                                >
                                    {workout.completed ? 'Undo' : 'Complete'}
                                </button>
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
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        marginTop: '2rem',
    },
    title: {
        fontSize: '1.25rem',
        color: '#111827',
        marginBottom: '1.5rem',
        fontWeight: '600',
    },
    emptyState: {
        textAlign: 'center',
        padding: '3rem',
        background: '#f9fafb',
        borderRadius: '0.5rem',
        color: '#6b7280',
        border: '1px solid #e5e7eb',
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    card: {
        background: '#ffffff',
        borderRadius: '0.5rem',
        padding: '1.25rem',
        border: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
    },
    completedCard: {
        backgroundColor: '#f9fafb',
        borderColor: '#f3f4f6',
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
    },
    workoutName: {
        fontSize: '1.125rem',
        margin: 0,
        color: '#111827',
        fontWeight: '600',
    },
    statusBadge: {
        fontSize: '0.75rem',
        fontWeight: '500',
        padding: '0.25rem 0.5rem',
        borderRadius: '9999px',
        backgroundColor: '#f3f4f6',
        color: '#4b5563',
    },
    details: {
        display: 'flex',
        gap: '1.5rem',
    },
    detailItem: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '0.875rem',
    },
    detailLabel: {
        color: '#6b7280',
    },
    detailValue: {
        color: '#111827',
        fontWeight: '500',
    },
    actions: {
        display: 'flex',
        gap: '0.5rem',
    },
    completeBtn: {
        padding: '0.5rem 0.875rem',
        borderRadius: '0.375rem',
        border: '1px solid #10b981',
        backgroundColor: 'transparent',
        color: '#10b981',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '0.875rem',
    },
    editBtn: {
        padding: '0.5rem 0.875rem',
        borderRadius: '0.375rem',
        border: '1px solid #4f46e5',
        backgroundColor: 'transparent',
        color: '#4f46e5',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '0.875rem',
    },
    deleteBtn: {
        padding: '0.5rem 0.875rem',
        borderRadius: '0.375rem',
        border: '1px solid #ef4444',
        backgroundColor: 'transparent',
        color: '#ef4444',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '0.875rem',
    }
};



export default WorkoutList;
