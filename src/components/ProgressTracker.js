import React from 'react';

const ProgressTracker = ({ workouts, toggleComplete }) => {
    const weeklyWorkouts = workouts.filter(w => {
        const workoutDate = new Date(w.date);
        const today = new Date();
        const firstDayOfWeek = today.getDate() - today.getDay(); // Sunday
        const lastDayOfWeek = firstDayOfWeek + 6; // Saturday
        const startDate = new Date(today.setDate(firstDayOfWeek));
        const endDate = new Date(new Date().setDate(lastDayOfWeek));
        return workoutDate >= startDate && workoutDate <= endDate;
    });

    const completedWeeklyWorkouts = weeklyWorkouts.filter(w => w.completed).length;

    return (
        <div style={styles.container}>
            <div style={styles.summaryCard}>
                <h3 style={styles.summaryTitle}>Weekly Progress</h3>
                <div style={styles.summaryGrid}>
                    <div style={styles.stat}>
                        <span style={styles.statLabel}>Completed This Week</span>
                        <span style={styles.statValue}>{completedWeeklyWorkouts} / {weeklyWorkouts.length}</span>
                    </div>
                </div>
            </div>

            <div style={styles.card}>
                <h2 style={styles.title}>Your Recent Workouts</h2>
                {workouts.length === 0 ? (
                    <p>No workouts recorded yet.</p>
                ) : (
                    <ul style={styles.list}>
                        {workouts.slice().reverse().map(workout => (
                            <li key={workout.id} style={styles.listItem}>
                                <div style={styles.workoutInfo}>
                                    <input
                                        type="checkbox"
                                        checked={workout.completed}
                                        onChange={() => toggleComplete(workout.id)}
                                        style={styles.checkbox}
                                    />
                                    <span style={{ ...styles.workoutName, textDecoration: workout.completed ? 'line-through' : 'none', color: workout.completed ? '#94a3b8' : '#1e293b' }}>
                                        {workout.name}
                                    </span>
                                </div>
                                <span style={styles.workoutDate}>{workout.date}</span>
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
    summaryCard: {
        background: '#ffffff',
        color: '#111827',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
    },
    summaryTitle: {
        fontSize: '1rem',
        color: '#6b7280',
        marginBottom: '0.5rem',
        fontWeight: '500',
    },
    statValue: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#111827',
        display: 'block',
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
    workoutInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    checkbox: {
        width: '1.125rem',
        height: '1.125rem',
        cursor: 'pointer',
    },
    workoutName: {
        fontSize: '1rem',
        fontWeight: '500',
    },
    workoutDate: {
        fontSize: '0.875rem',
        color: '#6b7280',
    }
};


export default ProgressTracker;
